package com.yao_o.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class indexController {

    @RequestMapping("/myLive2D")
    @ResponseBody
    public String userLogin(String name,HttpServletRequest request, HttpServletResponse response){

//        跨域
        response.setHeader("Access-Control-Allow-Origin", request.getHeader("origin"));
        //默认model
        String a= "{\"version\":\"1.0.0\",\"model\":\"./model/Potion-Maker/Pio/model.moc\",\"textures\":[\"./model/Potion-Maker/Pio/textures/animal-costume-racoon.png\"],\"layout\":{\"center_x\":0,\"center_y\":-0.05,\"width\":2},\"hit_areas_custom\":{\"head_x\":[-0.35,0.6],\"head_y\":[0.19,-0.2],\"body_x\":[-0.3,-0.25],\"body_y\":[0.3,-0.9]},\"motions\":{\"idle\":[{\"file\":\"./model/Potion-Maker/Pio/motions/Breath1.mtn\"},{\"file\":\"./model/Potion-Maker/Pio/motions/Breath2.mtn\"},{\"file\":\"./model/Potion-Maker/Pio/motions/Breath3.mtn\"},{\"file\":\"./model/Potion-Maker/Pio/motions/Breath5.mtn\"},{\"file\":\"./model/Potion-Maker/Pio/motions/Breath7.mtn\"},{\"file\":\"./model/Potion-Maker/Pio/motions/Breath8.mtn\"}],\"sleepy\":[{\"file\":\"./model/Potion-Maker/Pio/motions/Sleeping.mtn\"}],\"flick_head\":[{\"file\":\"./model/Potion-Maker/Pio/motions/Touch Dere1.mtn\"},{\"file\":\"./model/Potion-Maker/Pio/motions/Touch Dere2.mtn\"},{\"file\":\"./model/Potion-Maker/Pio/motions/Touch Dere3.mtn\"},{\"file\":\"./model/Potion-Maker/Pio/motions/Touch Dere4.mtn\"},{\"file\":\"./model/Potion-Maker/Pio/motions/Touch Dere5.mtn\"},{\"file\":\"./model/Potion-Maker/Pio/motions/Touch Dere6.mtn\"}],\"tap_body\":[{\"file\":\"./model/Potion-Maker/Pio/motions/Sukebei1.mtn\"},{\"file\":\"./model/Potion-Maker/Pio/motions/Sukebei2.mtn\"},{\"file\":\"./model/Potion-Maker/Pio/motions/Sukebei3.mtn\"},{\"file\":\"./model/Potion-Maker/Pio/motions/Touch1.mtn\"},{\"file\":\"./model/Potion-Maker/Pio/motions/Touch2.mtn\"},{\"file\":\"./model/Potion-Maker/Pio/motions/Touch3.mtn\"},{\"file\":\"./model/Potion-Maker/Pio/motions/Touch4.mtn\"},{\"file\":\"./model/Potion-Maker/Pio/motions/Touch5.mtn\"},{\"file\":\"./model/Potion-Maker/Pio/motions/Touch6.mtn\"}]}}";
        // 随机选中的图片
        String num="";
        //人物model，
        String personModel="";

        System.out.println(name);
        //人物模型
        if(name!=null){
            if(name.equals("Tia") || name=="Tia"){
                num =String.valueOf((int)(Math.random()*63));
                personModel = "Tia";
//                a= "{\"version\":\"1.0.0\",\"model\":\"./model/Potion-Maker/"+personModel+"/model.moc\",\"textures\":[\"./model/Potion-Maker/"+personModel+"/textures/"+num+".png\"],\"layout\":{\"center_x\":0,\"center_y\":-0.05,\"width\":2},\"hit_areas_custom\":{\"head_x\":[-0.35,0.6],\"head_y\":[0.19,-0.2],\"body_x\":[-0.3,-0.25],\"body_y\":[0.3,-0.9]},\"motions\":{\"idle\":[{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Breath1.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Breath2.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Breath3.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Breath5.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Breath7.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Breath8.mtn\"}],\"sleepy\":[{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Sleeping.mtn\"}],\"flick_head\":[{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch Dere1.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch Dere2.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch Dere3.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch Dere4.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch Dere5.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch Dere6.mtn\"}],\"tap_body\":[{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Sukebei1.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Sukebei2.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Sukebei3.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch1.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch2.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch3.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch4.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch5.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch6.mtn\"}]}}";
            }else if(name.equals("Pio") || name=="Pio"){
                num =String.valueOf((int)(Math.random()*87));
                personModel="Pio";
//                a= "{\"version\":\"1.0.0\",\"model\":\"./model/Potion-Maker/"+personModel+"/model.moc\",\"textures\":[\"./model/Potion-Maker/"+personModel+"/textures/"+num+".png\"],\"layout\":{\"center_x\":0,\"center_y\":-0.05,\"width\":2},\"hit_areas_custom\":{\"head_x\":[-0.35,0.6],\"head_y\":[0.19,-0.2],\"body_x\":[-0.3,-0.25],\"body_y\":[0.3,-0.9]},\"motions\":{\"idle\":[{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Breath1.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Breath2.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Breath3.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Breath5.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Breath7.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Breath8.mtn\"}],\"sleepy\":[{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Sleeping.mtn\"}],\"flick_head\":[{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch Dere1.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch Dere2.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch Dere3.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch Dere4.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch Dere5.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch Dere6.mtn\"}],\"tap_body\":[{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Sukebei1.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Sukebei2.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Sukebei3.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch1.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch2.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch3.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch4.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch5.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch6.mtn\"}]}}";
            }
            a= "{\"version\":\"1.0.0\",\"model\":\"./model/Potion-Maker/"+personModel+"/model.moc\",\"textures\":[\"./model/Potion-Maker/"+personModel+"/textures/"+num+".png\"],\"layout\":{\"center_x\":0,\"center_y\":-0.05,\"width\":2},\"hit_areas_custom\":{\"head_x\":[-0.35,0.6],\"head_y\":[0.19,-0.2],\"body_x\":[-0.3,-0.25],\"body_y\":[0.3,-0.9]},\"motions\":{\"idle\":[{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Breath1.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Breath2.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Breath3.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Breath5.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Breath7.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Breath8.mtn\"}],\"sleepy\":[{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Sleeping.mtn\"}],\"flick_head\":[{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch Dere1.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch Dere2.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch Dere3.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch Dere4.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch Dere5.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch Dere6.mtn\"}],\"tap_body\":[{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Sukebei1.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Sukebei2.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Sukebei3.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch1.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch2.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch3.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch4.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch5.mtn\"},{\"file\":\"./model/Potion-Maker/"+personModel+"/motions/Touch6.mtn\"}]}}";
        }
        return a;
    }

}
