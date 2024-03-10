package com.example.wallpapers;

import com.example.wallpapers.controller.WallpaperController;
import com.example.wallpapers.model.Wallpaper;
import com.example.wallpapers.repository.WallpaperRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.nio.file.Files;
import java.nio.file.Paths;

@SpringBootApplication
public class WallpapersApplication implements ApplicationRunner {

	@Autowired
	private WallpaperRepository wallpaperRepository;

public static void main(String[] args) {
		SpringApplication.run(WallpapersApplication.class, args);
	}

	@Override
	public void run(ApplicationArguments args) throws Exception {
	}
}
