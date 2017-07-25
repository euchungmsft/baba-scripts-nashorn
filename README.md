# baba-scripts-nashorn
JS scripts to automate resources on Alibaba Cloud

Required libraries

 - aliyun-java-sdk-core-3.0.9.jar 
 - aliyun-java-sdk-ecs-2.2.3.jar
 - gson-2.8.1.jar

Get these from maven repository

To run these examples
1. Install JDK 1.8+ (OpenJDK)
2. Get valid set of libraries and copy them into valid path eg) ~/lib
3. Set environment variables
4. Run from command prompt

Environment variables

 - KEYID=Your key id 
 - SECRET=Your Key secret 
 - PASSWD=root password of the instances to be created

Command line example

    $ jjs -cp <classpath for the libraries> -scripting bootstrap-native.js

To make it simple 

1. Chmod the script by adding executable (+x)
2. Add following line on the top of the script '#!/usr/bin/jjs'
3. Simply run the script by its name

See further details from 

https://wiki.openjdk.java.net/display/Nashorn/Nashorn+extensions