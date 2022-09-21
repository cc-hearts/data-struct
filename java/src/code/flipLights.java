package code;

import org.junit.Test;

import java.util.HashSet;

public class flipLights {

    public static HashSet<String> set = null;

    public int flipLights(int n, int presses) {
        if (presses == 0) return 1;
        int[] arr = new int[n];
        set = new HashSet<>();
        // 0 开 1 关
        for (int i = 1; i <= 4; i++) {
            dfs(arr, presses, i);
        }
        return set.size();
    }

    public void setMap(int[] array) {
        StringBuilder s = new StringBuilder();
        for (int i = 0; i < array.length; i++) {
            s.append(array[i]);
        }
        String str = s.toString();
        for (String ss : set) {
            if (ss.equals(str)) return;
        }
        set.add(str);
    }

    // type = 1 | 2 | 3 | 4
    public void dfs(int[] array, int length, int type) {
        if (length == 0) return;
        int[] arr = new int[array.length];
        for (int i = 0; i < array.length; i++) {
            arr[i] = array[i];
        }
        switch (type) {
            case 1: {
                for (int i = 0; i < arr.length; i++) {
                    arr[i] = array[i] ^ 1;
                }
                setMap(arr);
                break;
            }
            case 2: {
                for (int i = 0; i < arr.length; i++) {
                    arr[i] = i % 2 != 0 ? arr[i] ^ 1 : arr[i];
                }
                setMap(arr);
                break;
            }
            case 3: {
                for (int i = 0; i < arr.length; i++) {
                    arr[i] = i % 2 == 0 ? arr[i] ^ 1 : arr[i];
                }
                setMap(arr);
                break;
            }
            case 4: {
                for (int i = 0; i < arr.length; i++) {
                    arr[i] = i == 0 || (i - 1) % 3 == 0 ? arr[i] ^ 1 : arr[i];
                }
                setMap(arr);
                break;
            }
        }
        length--;
        for (int i = 1; i <= 4; i++) {
            dfs(arr, length, i);
        }
    }


    @Test
    public void test() {
        System.out.println(flipLights(3, 2));
        
    }

}
