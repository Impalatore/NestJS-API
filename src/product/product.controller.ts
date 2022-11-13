import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { CreateProductoDTO } from "./dto/product.dto";
import { json } from 'express';
import { log } from "util";

@Controller('product')
export class ProductController {
  @Post('/create')
  createPost(@Res() res, @Body() createProductoDTO: CreateProductoDTO) {
    console.log(createProductoDTO);
    res.status(HttpStatus.OK).json({
      message: 'Recibido',
    });
  }
}
