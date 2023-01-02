/**
 * @author cc-heart
 * @description
 * @Date 2023-01-02
 */

// TODO: MinPriorityQueue 库的实现
function getNumberOfBacklogOrders(orders: number[][]): number {
  // 优先队列
  const MOD = 10 ** 9 + 7

  // 最小的销售订单队列 最大的购入订单的队列
  // @ts-ignore
  let minSellQueue = new MinPriorityQueue({
      priority: (arr: number[]) => arr[0],
    }),
    // @ts-ignore
    maxBuyQueue = new MaxPriorityQueue({
      priority: (arr: number[]) => arr[0],
    })

  for (let i = 0; i < orders.length; i++) {
    const [, , orderType] = orders[i]
    if (orderType === 0) {
      // 买入 的订单
      maxBuyQueue.enqueue(orders[i])
    } else {
      minSellQueue.enqueue(orders[i])
    }

    while (maxBuyQueue.size() > 0 && minSellQueue.size() > 0 && maxBuyQueue.front().element[0] >= minSellQueue.front().element[0]) {
      // 买入的永远要高于卖出的
      const buy = maxBuyQueue.front().element,
        sell = minSellQueue.front().element
      // 买卖相同
      if (buy[1] === sell[1]) {
        maxBuyQueue.dequeue()
        minSellQueue.dequeue()
      } else if (buy[1] > sell[1]) {
        // 买入的数量多于卖出的数量 则买入的数量减去卖出的 卖出的弹出队列
        buy[1] -= sell[1]
        minSellQueue.dequeue()
      } else {
        sell[1] -= buy[1]
        maxBuyQueue.dequeue()
      }
    }
  }
  const totalArr = maxBuyQueue.toArray().concat(minSellQueue.toArray())
  // @ts-ignore
  return totalArr.reduce((pre: number, cur) => (pre + cur.element[1]) % MOD, 0)
}
