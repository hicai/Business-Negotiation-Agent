const express = require('express');
const cors = require('cors');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

const generateWatermark = (doc, exportName, exportTime) => {
  const watermarkText = `堂客科技 ${exportName} ${exportTime}`;
  const pageWidth = doc.page.width;
  const pageHeight = doc.page.height;
  
  doc.save();
  doc.globalAlpha(0.08);
  doc.fontSize(18);
  doc.fillColor('#333333');
  doc.font('Helvetica');
  
  const diagonalLength = Math.sqrt(pageWidth * pageWidth + pageHeight * pageHeight);
  const rotationAngle = Math.atan2(pageHeight, pageWidth);
  
  const spacing = 80;
  const textWidth = doc.widthOfString(watermarkText);
  
  for (let i = -diagonalLength; i < diagonalLength; i += spacing) {
    doc.save();
    doc.translate(pageWidth / 2, pageHeight / 2);
    doc.rotate(rotationAngle * 180 / Math.PI);
    doc.text(watermarkText, i - textWidth / 2, -10);
    doc.restore();
  }
  
  doc.restore();
};

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

app.post('/api/export-pdf', (req, res) => {
  try {
    const { data, exportName = '用户' } = req.body;
    const exportTime = formatDate(new Date());
    
    const doc = new PDFDocument({
      size: 'A4',
      margin: 50
    });
    
    const filename = `谈判方案_${data.brandProfile?.companyName || '方案'}_${Date.now()}.pdf`;
    const filePath = path.join(__dirname, 'temp', `${uuidv4()}.pdf`);
    
    if (!fs.existsSync(path.join(__dirname, 'temp'))) {
      fs.mkdirSync(path.join(__dirname, 'temp'), { recursive: true });
    }
    
    doc.pipe(fs.createWriteStream(filePath));
    
    doc.fontSize(24).font('Helvetica-Bold').fillColor('#1a1a2e');
    doc.text(`${data.brandProfile?.companyName || '未知品牌'} 商务谈判方案`, { align: 'center' });
    
    doc.fontSize(10).font('Helvetica').fillColor('#666666').moveDown();
    doc.text(`导出人：${exportName}`, { align: 'right' });
    doc.text(`导出时间：${exportTime}`, { align: 'right' });
    
    doc.moveDown(2);
    
    if (data.brandTags && data.brandTags.length > 0) {
      doc.fontSize(16).font('Helvetica-Bold').fillColor('#1a1a2e');
      doc.text('一、品牌画像标签');
      doc.fontSize(10).font('Helvetica').fillColor('#333333');
      
      const tagColumns = 2;
      const tagsPerColumn = Math.ceil(data.brandTags.length / tagColumns);
      
      for (let i = 0; i < tagsPerColumn; i++) {
        let line = '';
        const tag1 = data.brandTags[i];
        const tag2 = data.brandTags[i + tagsPerColumn];
        
        if (tag1) {
          line += `${tag1.dimension}: ${tag1.tag}`;
        }
        if (tag2) {
          line += ' '.repeat(Math.max(30 - line.length, 5)) + `${tag2.dimension}: ${tag2.tag}`;
        }
        doc.text(line);
      }
      doc.moveDown(2);
    }
    
    if (data.customerInfo) {
      Object.keys(data.customerInfo).forEach((key) => {
        const section = data.customerInfo[key];
        if (section && section.name && section.content) {
          doc.fontSize(16).font('Helvetica-Bold').fillColor('#1a1a2e');
          doc.text(`二、${section.name}`);
          doc.fontSize(10).font('Helvetica').fillColor('#333333');
          doc.text(section.content, { lineGap: 5 });
          doc.moveDown(2);
        }
      });
    }
    
    if (data.painPoints && data.painPoints.length > 0) {
      doc.fontSize(16).font('Helvetica-Bold').fillColor('#1a1a2e');
      doc.text('三、痛点分析');
      doc.fontSize(10).font('Helvetica').fillColor('#333333');
      
      data.painPoints.forEach((pain, index) => {
        doc.font('Helvetica-Bold');
        doc.text(`${index + 1}. ${pain.name}`);
        doc.font('Helvetica');
        doc.text(`   优先级：${pain.level}`);
        doc.text(`   影响：${pain.impact}`);
        doc.text(`   建议：${pain.suggestion}`);
        doc.moveDown();
      });
      doc.moveDown(2);
    }
    
    if (data.stageScripts) {
      const stageName = data.stageScripts.title || '谈判话术指导';
      doc.fontSize(16).font('Helvetica-Bold').fillColor('#1a1a2e');
      doc.text(`四、${stageName}`);
      doc.fontSize(10).font('Helvetica').fillColor('#333333');
      
      if (data.stageScripts.content && data.stageScripts.content.length > 0) {
        data.stageScripts.content.forEach((script, index) => {
          doc.text(`${index + 1}. ${script}`);
        });
      }
      doc.moveDown(2);
    }
    
    if (data.reverseQuestions && data.reverseQuestions.length > 0) {
      doc.fontSize(16).font('Helvetica-Bold').fillColor('#1a1a2e');
      doc.text('五、我方反问话术');
      doc.fontSize(10).font('Helvetica').fillColor('#333333');
      
      data.reverseQuestions.forEach((category) => {
        doc.font('Helvetica-Bold');
        doc.text(`【${category.category}】`);
        doc.font('Helvetica');
        
        category.questions.forEach((q) => {
          doc.text(`   • ${q.question}`);
          doc.text(`     （${q.purpose}）`);
        });
        doc.moveDown();
      });
      doc.moveDown(2);
    }
    
    if (data.customerFAQs && data.customerFAQs.length > 0) {
      doc.fontSize(16).font('Helvetica-Bold').fillColor('#1a1a2e');
      doc.text('六、客户常问问题及标准应答');
      doc.fontSize(10).font('Helvetica').fillColor('#333333');
      
      data.customerFAQs.forEach((faq, index) => {
        doc.font('Helvetica-Bold');
        doc.text(`${index + 1}. ${faq.question}`);
        doc.font('Helvetica');
        doc.text(`   ${faq.answer}`);
        doc.moveDown();
      });
    }
    
    generateWatermark(doc, exportName, exportTime);
    
    doc.end();
    
    doc.on('end', () => {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(filename)}"`);
      
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
      
      fileStream.on('end', () => {
        setTimeout(() => {
          fs.unlinkSync(filePath);
        }, 5000);
      });
    });
    
  } catch (error) {
    console.error('PDF generation error:', error);
    res.status(500).json({ error: 'PDF生成失败', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`PDF Export Server running on http://localhost:${port}`);
});