/**
 * @description:
 * @author: pengrenchang
 * @Date: 2022-11-28 14:14:07
 * @LastEditors: pengrenchang
 * @LastEditTime: 2022-11-28 14:14:07
 */
export function isFunction(val: unknown): val is Function {
    return typeof val === 'function'
}
