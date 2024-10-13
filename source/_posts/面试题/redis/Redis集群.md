---
title: Redis集群
date: 2024-10-13 17:00:00
tags:
    - 面试题
    - redis
categories:
    - 面试题
    - redis
---
:::tips
<font style="color:rgb(0, 0, 0);">Redis集群有哪些方案，知道嘛？</font>

<font style="color:rgb(0, 0, 0);">在Redis中提供的集群方案总共有三种</font>

+ <font style="color:rgb(0, 0, 0);">主从复制</font>
+ <font style="color:rgb(0, 0, 0);">哨兵模型</font>
+ <font style="color:rgb(0, 0, 0);">分片集群</font>

:::

**面试官喜欢问到的问题：**

:::tips
1. <font style="color:rgb(0, 0, 0);">redis主从数据同步的流程是什么？</font>
2. <font style="color:rgb(0, 0, 0);">怎么保证redis的高并发、高可用？</font>
3. <font style="color:rgb(0, 0, 0);">你们使用redis是单点还是集群，哪种集群？</font>
4. <font style="color:rgb(0, 0, 0);">redis分片集群中数据是怎么存储何读取的？</font>
5. <font style="color:rgb(0, 0, 0);">redis集群脑裂，该怎么解决呢？</font>

:::

## <font style="color:rgb(243, 50, 50);">主从模式</font>
单节点Redis的并发能力是有上限的，要进一步提高Redis的并发能力，就需要搭建主从集群，实现读写分离。

![](../../../images/面试题/redis/image_22.png)

主节点（master）负责 redis 的写操作，从节点（slave）负责 redis 中的读操作。

当 master 节点接收到写操作的时候，需要把数据同步到从节点 slave 才行，必须保证 master 与 slave 的数据一致性。

## <font style="color:rgb(255, 0, 1);">主从数据同步原理</font>
### <font style="color:rgb(0, 0, 0);">主从</font><font style="color:rgb(255, 0, 1);">全量同步</font>
**<font style="color:rgb(255, 0, 1);">Replication Id：</font>**<font style="color:rgb(0, 0, 0);">简称replid，是数据集的标记，id一致则说明是同一数据集。每一个master都有唯一的replid，slave则会继承master节点的replid</font>

**<font style="color:rgb(255, 0, 1);">offset：</font>**<font style="color:rgb(0, 0, 0);">偏移量，随着记录在repl_baklog中的数据增多而逐渐增大。slave完成同步时也会记录当时同步的offset。如果slave的offset小于master的offset，说明slave数据落后于master，需要更新。</font>

![](../../../images/面试题/redis/image_23.png)

### <font style="color:rgb(0, 0, 0);">主从</font><font style="color:rgb(255, 0, 1);">增量同步</font><font style="color:rgb(0, 0, 0);">（slave重启或后期数据变化）</font>
![](../../../images/面试题/redis/image_24.png)



:::tips
**<font style="color:rgb(0, 0, 0);">介绍一下redis的主从同步</font>**

<font style="color:rgb(0, 0, 0);">单节点Redis的并发能力是有上限的，要进一步提高Redis的并发能力，就需要搭建主从集群，实现读写分离。一般都是一主多从，主节点负责</font><font style="color:rgb(0, 0, 0);background-color:rgb(255, 242, 204);">写数据</font><font style="color:rgb(0, 0, 0);">，从节点负责</font><font style="color:rgb(0, 0, 0);background-color:rgb(255, 242, 204);">读数据</font><font style="color:rgb(0, 0, 0);">。</font>

<font style="color:rgb(0, 0, 0);"></font>

**<font style="color:rgb(0, 0, 0);">能说一下，主从同步数据的流程吗？</font>**

**<font style="color:rgb(0, 0, 0);">全量同步：</font>**

1. <font style="color:rgb(0, 0, 0);">从节点请求主节点同步数据（replication id、offset）</font>
2. <font style="color:rgb(0, 0, 0);">主节点判断是否是第一次请求，是第一次就与从节点同步版本信息（replication id和offset）</font>
3. <font style="color:rgb(0, 0, 0);">主节点执行bgsave，生成rdb文件后，发送给从节点去执行</font>
4. <font style="color:rgb(0, 0, 0);">在rdb生成执行期间，主节点会以命令的方式记录到缓冲区（一个日志文件repl_baklog）</font>
5. <font style="color:rgb(0, 0, 0);">把生成之后的命令日志文件发送给从节点进行同步</font>

**<font style="color:rgb(0, 0, 0);">增量同步：</font>**

1. <font style="color:rgb(0, 0, 0);">从节点请求主节点同步数据，主节点判断不是第一次请求，不是第一次就获得从节点的offset值</font>
2. <font style="color:rgb(0, 0, 0);">主节点从命令日志中获取offset值之后的数据，发送给从节点进行数据同步</font>

:::

## 面试场景
:::tips
**<font style="color:rgb(0, 0, 0);">面试官:</font>**<font style="color:rgb(0, 0, 0);"> Redis集群有哪些方案,知道嘛？</font>

**<font style="color:rgb(0, 0, 0);">候选人:</font>**<font style="color:rgb(0, 0, 0);">嗯~~，在Redis中提供的集群方案总共有三种:主从复制、哨兵模式、Redis分片集群</font>

<font style="color:rgb(0, 0, 0);"></font>

**<font style="color:rgb(0, 0, 0);">面试官:</font>**<font style="color:rgb(0, 0, 0);">那你来介绍一下主从同步</font>

**<font style="color:rgb(0, 0, 0);">候选人:</font>**<font style="color:rgb(0, 0, 0);">嗯，是这样的，单节点Redis的并发能力是有上限的，要进一步提高Redis的并发能力，可以搭建主从集群，实现读写分离。一般都是一主多从，主节点负责写数据，从节点负责读数据，主节点写入数据之后，需要把数据同步到从节点中</font>

<font style="color:rgb(0, 0, 0);"></font>

**<font style="color:rgb(0, 0, 0);">面试官:</font>**<font style="color:rgb(0, 0, 0);">能说一下，主从同步数据的流程</font>

**<font style="color:rgb(0, 0, 0);">候选人:</font>**<font style="color:rgb(0, 0, 0);">嗯~~，好!主从同步分为了两个阶段，一个是全量同步，一个是增量同步</font>

<font style="color:rgb(0, 0, 0);">全量同步是指从节点第一次与主节点建立连接的时候使用全量同步，流程是这样的:</font>

<font style="color:rgb(0, 0, 0);">第一：从节点请求主节点同步数据，其中从节点会携带自己的replication id和offset偏移量。</font>

<font style="color:rgb(0, 0, 0);">第二：主节点判断是否是第一次请求，主要判断的依据就是，主节点与从节点是否是同一个replicatiorid，如果不是，就说明是第一次同步，那主节点就会把自己的replication id和offset发送给从节点，让从节点与主节点的信息保持一致。</font>

<font style="color:rgb(0, 0, 0);">第三:在同时主节点会执行bgsave，生成rdb文件后，发送给从节点去执行，从节点先把自己的数据清空，然后执行主节点发送过来的rdb文件，这样就保持了一致</font>

<font style="color:rgb(0, 0, 0);">当然，如果在rdb生成执行期间，依然有请求到了主节点，而主节点会以命令的方式记录到缓冲区，缓冲区是一个日志文件，最后把这个日志文件发送给从节点，这样就能保证主节点与从节点完全一致了，后期再同步数据的时候，都是依赖于这个日志文件，这个就是全量同步</font>

<font style="color:rgb(0, 0, 0);">增量同步指的是，当从节点服务重启之后，数据就不一致了，所以这个时候，从节点会请求主节点同步数据，主节点还是判断不是第一次请求，不是第一次就获取从节点的offset值，然后主节点从命令日志中获取offset值之后的数据，发送给从节点进行数据同步</font>

:::

---

