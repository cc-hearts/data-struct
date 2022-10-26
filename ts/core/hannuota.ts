/**
 * @author heart
 * @description 汉诺塔递归问题
 * @Date 2022-10-24
 */

function TowerOfHanoi(n: number) {
  const a = 'A',
    b = 'B',
    c = 'C'
  const loop = (n: number, a: string, b: string, c: string) => {
    if (n === 0) return
    loop(n - 1, a, c, b)
    // 第n元素移动完成
    console.log(a, '-->', c)
    loop(n - 1, b, a, c) // 将 n- 1 个盘子 从b柱移动到c柱 a为工具柱
  }
  // n个圆盘 将从a 通过 b 工具柱子移动到 c
  loop(n, a, b, c)
}

TowerOfHanoi(3)
