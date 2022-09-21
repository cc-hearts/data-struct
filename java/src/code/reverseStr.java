package code;

import org.junit.Test;

/**
 * @author heart
 * @description
 * @Date 2022/9/13
 * @see <a href="https://leetcode.cn/problems/reverse-string-ii/">...</a>
 */
public class reverseStr {
    public String reverseStr(String s, int k) {
        int left = 0;
        int length = s.length();
        StringBuilder ans = new StringBuilder();
        for (int i = 0; i < length; i++) {
            if (i == length - 1 && i - left + 1 < 2 * k) {
                int diffLength = i - left + 1;
                if (diffLength >= k) {
                    // 反转k个数之前的
                    ans.append(reverseString(s, left, left + k - 1));
                    ans.append(s.substring(left + k, i + 1));
                } else {
                    ans.append(reverseString(s, left, i));
                }
                break;
            } else {
                if (i - left + 1 == 2 * k) {
                    ans.append(reverseString(s, left, i - k));
                    ans.append(s.substring(i - k + 1, i + 1));
                    left = i + 1;
                }
            }

        }
        return ans.toString();
    }

    public String reverseString(String s, int start, int end) {
        String temp = s.substring(start, end + 1);
        return new StringBuffer(temp).reverse().toString();
    }

    @Test
    public void test() {
       assert "bacdfeg".equals(reverseStr("abcdefg", 2));
       assert "bacd".equals(reverseStr("abcd", 2));
    }
}