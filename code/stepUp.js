/**
 * User: yexiaolong/771388996@qq.com
 * Date: 2021/11/26
 * Time: 12:34 下午
 * 上台阶问题
 */
/**
 *【问题描述】
 * 楼梯有s阶台阶,上楼时可以一步上1阶,也可以一步上2阶，编程计算共有多少种不同的走法。
 * 输入
 * 台阶数n
 * 输出
 * 输出对应一行输入的结果，即为走法的数目。
 * 样例输入
 * 2
 * 样例输出
 * 2
 **/
/**
 * 【问题解析】
 * 我们现在想象自己已经站在第n级台阶上了，那么我们上一个位置只能在第n-1或者n-2级台阶上。比如我们在第3级台阶上，我们上一个位置就在第1或者第2级台阶上。
 * 也就是说我们到达第3级台阶有两种情况，分别计算着两种情况并相加即可，即到达第1级台阶的方式数加上到达第2级台阶的方式数，结果等于3。
 * 同理到达第n级台阶的放法数就等于到达第n-1级台阶与到达第n-2级台阶数之和。这就是一个递归的过程（自己调用自己只是传入参数不一样），递推方程为：
 *        1,    n=1
 * F(n)=  2,    n=2
 *        F(n-1) + F(n-2),  n > 2
 */
const n = 3
const countSetUp = function (currentN) {
    if (currentN === 1) {
        return 1
    }
    if (currentN === 2) {
        return 2
    }
    return countSetUp(currentN-1)+countSetUp(currentN-2)
}
const result = countSetUp(n)
console.log(result)

/** ---------------------- **/
const num = 3
let step = 0
const fun = function (num) {
    if (num <= 0) {
        step++;
        return
    }
    for (let i = 1; i <= 2; i++) {
        if (num - i >= 0) {
            fun(num-i)
        }
    }
}
fun(num)
console.log('step ==>', step)




