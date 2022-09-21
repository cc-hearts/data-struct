package code;

import org.junit.Test;

import java.util.Arrays;

/**
 * @author heart
 * @description
 * @Date 2022/9/14
 * @see <a href="https://leetcode.cn/problems/mean-of-array-after-removing-some-elements/">...</a>
 */
public class trimMean {
    public double trimMean(int[] arr) {
        // 排序
        Arrays.sort(arr);
        int length = (int) Math.ceil(arr.length * 0.05);
        int total = 0;
        int count = 0;
        for (int i = Math.max(length, 0); i < arr.length - length; i++) {
            total += arr[i];
            count++;
        }
        // TODO: 如何保留5位小数
        return (double) total / count;
    }

    @Test
    public void test() {
        int[] arr = new int[]{1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3};
        assert trimMean(arr) == 2.00000;

        int[] case2 = new int[]{6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0};
        assert trimMean(case2) == 4.0;

        int[] case3 = new int[]{6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4, 3, 8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4};
        assert  trimMean(case3) == 4.77778;
    }
}
