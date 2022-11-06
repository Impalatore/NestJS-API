import { Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { json } from 'express';

@Controller('product')
export class ProductController {
  @Post('/create')
  createPost(@Res() res) {
    res.status(HttpStatus.OK).json({
      message: 'Recibido',
    });
  }
}
