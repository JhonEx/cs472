package edu.miu.cs.wap.model;

public class Guest {
    //fields
    String name;
    Integer age;

    public Guest(String name,Integer age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Guest{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
