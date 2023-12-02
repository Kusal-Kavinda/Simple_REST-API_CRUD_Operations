import { Injectable } from "@nestjs/common";
import { ItemEntity } from "../../entities/item.entity";

@Injectable()
export class ItemService {
    itemDB = [];

    delete(id: string) {
        this.itemDB = this.itemDB.filter((u) => u.id != id);
    }

    update(id: string, updatedItem: ItemEntity) {
        const index = this.itemDB.findIndex((item) => item.id === id);

        if (index !== -1) {
            // If the item exists, update it with the new data
            this.itemDB[index] = { ...this.itemDB[index], ...updatedItem }; // Spread operator (...) to merge the objects
            return this.itemDB[index];
        }

        return null; // Return null if the item with the provided ID is not found
    }
    
    create(item: ItemEntity) {
        item.id = 'id_' + new Date().getTime();
        this.itemDB.push(item)
        return (item)
    }
    
    getAll(){
        return this.itemDB
    }
}