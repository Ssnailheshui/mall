module.exports={
  configureWebpack:{
    resolve:{
      extensions:['.js','.css','.vue'],
      alias:{
        'assets' : '@/assets',
        'common' : '@/common',
        'components' : '@/components',
        'views' : '@/views' ,
        'network': '@/network',
        
       
      }
    }
  }
}