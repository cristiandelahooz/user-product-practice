import { Injectable } from '@nestjs/common';
import type { CreateProductDto } from './dto/create-product.dto';
import type { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  create(createProductDto: CreateProductDto) {
    return {
      message: 'This action adds a new product',
      data: createProductDto,
    };
  }

  findAll() {
    return 'This action returns all product';
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
