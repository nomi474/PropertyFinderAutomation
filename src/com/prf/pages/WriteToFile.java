package com.prf.pages;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class WriteToFile {

 public static void main(String[] args) throws IOException {
		String abc = "The quick brown fox jumps over the lazy dog.";
		String xyz = "Hello world!";
		
		BufferedWriter writer = new BufferedWriter(new FileWriter("/Users/NaumanSheikh/abc.csv"));
	    writer.write(abc);
	    writer.append("\n");
	    writer.append(xyz);
	    writer.close();
	    String  numAgentsText = "2741 Matching Agents Found";
		String[] parts = numAgentsText.split(" Matching");
		int totalAgentsCount = Integer.parseInt(parts[0]);  
		System.out.println("Total agents count:" + totalAgentsCount);

	}
}
