Short Link.
===

我们对于短地址需求究竟有哪些呢？

* 获得更短、更容易抄写和分享的地址。（但在许多时候，这只是次要需求）
* 可以对用户的访问进行统计，便于后续的数据分析。（这是很有必要的）
* 修改短地址的指向。（当你的网址发生了变更，你可以对那些已经分享出去的网址进行修改，在某些情况下，这个功能的意义非常重大）

这要求我们最好把这一切的权限都掌握在自己的手里，所以大多数时候我们倾向于自己搭建属于自己的短地址服务。

首先只需要一个域名，当然这很简单。然后我们还需要一个服务器，安装程序，设置数据库……这很麻烦，而且如果有一天我们需要对这个程序进行迁移，就会面临更加麻烦的情况。

如果你有大量的需求，那么这确实是值得的。但是我只对日常分享的几个小项目地址有上述需求，就不太希望大费周章了。

为什么不可以用纯前端的方式去解决这个问题呢？我们可以轻松的实现网址的跳转，也可以方便地在网页中放入第三方的统计代码，就像我们在每一个网站中所添加的那样。然后还有什么呢？对，一个服务器。但既然是存钱的那页面，为什么我不可以把它放在 Github page 呢？

我觉得我的想法是完美的，当然这要相对于很低数量的需求。我觉得如果记录的数目少于 3000 条，这个方法的性能应该不会低于其他短地址程序。当然这只是我纯的估计。

## 使用方法:

有两种使用方法，根据自己的情况选择合适的就可以了。

### 本地构建：

* 修改 `source\index.html` 中的统计代码。毕竟你应该不会希望让我去阅读你的短地址统计结果，而不是你自己。
* 修改 `config.json` 中的一些简单配置信息，以及添加或者删除短网址的记录，当然要注意遵循 JSON 文件的格式。
* 运行 `yarn build` 命令去生成生产环境中的网页文件。这样就会在根目录下生成 `index.html` 和 `urlsList.md` 文件了。后者是对所有短网址记录的一个列表，方便自己进行查阅。
* 上传到你的 Github 并设置好 page 相关的选项。

这个方法性能会比较好，因为只有一次网络请求，并且数据都已经预先处理好了。而且会在根目录下生成一个网址列表文件，方便自己查阅和分享。

### 直接使用：

* 修改 `docs\index.html` 中的统计代码。毕竟你应该不会希望让我去阅读你的短地址统计结果，而不是你自己。
* 修改 `docs\config.json` 中的一些简单配置信息，以及添加或者删除短网址的记录，当然要注意遵循 JSON 文件的格式。
* 上传到你的 Github 并设置好 page 相关的选项。注意这时候要选择的不是根目录，而是 `docs` 这个目录

这个方法使用起来非常简单无脑，不需要本地的 Node.js 环境，不需要更多的相关知识。只需要照猫画虎的修改配置文件即可。真正使用到的只有 `docs` 文件夹下的两个文件。

---

本项目的使用授权价格为 6.66 元，仅为使用授权，不承诺任何售后。

使用前请自觉扫码付费：

![](./source/WePay-360.png)
![](./source/AliPay-360.png)
![](./source/QQPay-360.png)