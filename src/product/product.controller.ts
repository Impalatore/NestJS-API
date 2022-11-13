import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { CreateProductDTO } from "./dto/product.dto";
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController {

  constructor(private productService: ProductService) {}

  @Post('/create')
  async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    const product = this.productService.createProduct(createProductDTO)
    res.status(HttpStatus.OK).json({
      message: 'Producto recibido',
      product: product
    })
  }
}