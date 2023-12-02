import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ItemService } from "../service/item.service";
import { ItemEntity } from "../../entities/item.entity";

@Controller("item")
export class ItemController{
    constructor(private readonly itemService: ItemService){}

    @Get()
    getAll(){
        return this.itemService.getAll()
    }

    @Post()
    create(@Body() item: ItemEntity) {    
        return this.itemService.create(item)
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() updatedItem: ItemEntity) {
        return this.itemService.update(id, updatedItem);
    }

    @Delete(":id")
    delete(@Param("id") id: string) {
        return this.itemService.delete(id);
    }
}