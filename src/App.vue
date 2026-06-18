<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-briefcase text-white text-lg"></i>
            </div>
            <div>
              <h1 class="text-xl font-bold text-gray-900">商务访谈智能体</h1>
              <p class="text-xs text-gray-500">谈判方案生成系统</p>
            </div>
          </div>
          <nav class="flex items-center space-x-4">
            <router-link 
              to="/" 
              class="nav-link"
              :class="{ 'text-blue-600 border-b-2 border-blue-600': $route.path === '/' }"
            >
              <i class="fas fa-home mr-1"></i> 首页
            </router-link>
            <router-link 
              to="/create" 
              class="nav-link"
              :class="{ 'text-blue-600 border-b-2 border-blue-600': $route.path === '/create' }"
            >
              <i class="fas fa-plus-circle mr-1"></i> 新建方案
            </router-link>
            <router-link 
              to="/history" 
              class="nav-link"
              :class="{ 'text-blue-600 border-b-2 border-blue-600': $route.path === '/history' }"
            >
              <i class="fas fa-history mr-1"></i> 历史方案
            </router-link>
          </nav>
        </div>
      </div>
    </header>
    
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <router-view />
    </main>
    
    <footer class="bg-white border-t border-gray-200 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p class="text-center text-sm text-gray-500">商务访谈/谈判方案智能体系统 v1.2</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.nav-link {
  @apply px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200;
}
</style>
