package code;

import org.junit.Test;

public class replaceSpace {

    public String replaceSpace(String s) {
        char[] chars = s.toCharArray();
        // 使用 StringBuilder 单线程使用，比较快
        StringBuilder ans = new StringBuilder();
        for (int i = 0; i < chars.length; i++) {
            if (chars[i] == ' ') {
                ans.append("%20");
            } else ans.append(chars[i]);
        }
        return ans.toString();
    }

    // 优化版本解法:
    public String replaceSpace2(String s) {
        if (s == null) return null;
        StringBuffer stringBuffer = new StringBuffer();
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == ' ') {
                stringBuffer.append("  ");
            }
        }
        int left = s.length() - 1;
        s += stringBuffer.toString();
        int right = s.length() - 1;
        char[] chars = s.toCharArray();
        while (left >= 0) {
            if (s.charAt(left) == ' ') {
                chars[right--] = '0';
                chars[right--] = '2';
                chars[right--] = '%';
            } else {
                chars[right--] = chars[left];
            }
            left--;
        }
        return new String(chars);
    }

    @Test
    public void test() {
        assert "We%20are%20happy.".equals(replaceSpace("We are happy."));
    }
}
