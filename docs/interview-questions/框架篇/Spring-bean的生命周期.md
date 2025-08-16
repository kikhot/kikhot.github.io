---
sidebar_position: 4
---


**🗨️** **Spring 的 bean 的生命周期？**

了解 bean 的生命周期可以更好的掌握：Spring 容器是如何管理和创建 bean 实例、方便调试和解决问题



### BeanDefinition
Spring 容器在进行实例化时，会将 xml 配置的 \<bean\> 的信息封装成一个 BeanDefinition 对象，Spring 根据 BeanDefinition 来创建 Bean 对象，里面有很多的属性用来描述 Bean。

![](./image/image_79dd6f29-19e3-41de-adb4-fc10ca06d651.png)

![](./image/image_995f19a5-5cb6-4bc6-8f96-a25a03dae094.png)

+ beanClassName：bean 的类名
+ initMethodName：初始化方法名称
+ properryValues：bean 的属性值
+ scope：作用域
+ lazyInit：延迟初始化



### bean 的生命周期![](./image/image_98835352-108e-4167-8823-2c3891b665b6.png)
### 面试场景
**🗨️** **Spring 的 bean 的生命周期？**

1. 通过 BeanDefinition 获取 bean 的定义信息
2. 调用构造函数实例化 bean
3. bean 的依赖注入
4. 处理 Aware 接口（BeanNameAware、BeanFactoryAware、ApplicationContextAware）
5. Bean 的后置处理器 BeanPostProcessor-前置
6. 初始化方法（InitializingBean、init-method）
7. Bean 的后置处理器 BeanPostProcessor-后置
8. 销毁 bean

![](./image/image_40890600-cb08-4dd5-8785-fa9daf1ee4b3.png)

