import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { CreateProductoDTO } from "./dto/product.dto";

@Controller('product')
export class ProductoController {
  @Post('/api/create')
  createPost(@Res() res, @Body() createProductoDTO: CreateProductoDTO) {
    console.log(createProductoDTO);
    res.status(HttpStatus.OK).json({
      message: 'Producto recibido',
    })
  }
}