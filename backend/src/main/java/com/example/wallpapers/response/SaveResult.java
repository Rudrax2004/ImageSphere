package com.example.wallpapers.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SaveResult {
    private boolean error;
    private String wallpapername;
    private String link;
    private String authorname;


}
