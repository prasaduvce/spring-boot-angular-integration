package com.test.angular.controllers;

import com.test.angular.domain.Item;
import com.test.angular.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/items")
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;

    @RequestMapping(method = RequestMethod.GET)
    public List<Item> findAllItems() {
        return itemRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Item addItem(@RequestBody Item item) {
        item.setId(null);
        return itemRepository.saveAndFlush(item);
    }

    @RequestMapping(value = "{/id}", method = RequestMethod.PUT)
    public Item updateItem(@RequestBody Item updateItem, @PathVariable Integer id) {
        updateItem.setId(null);
        return itemRepository.saveAndFlush(updateItem);
    }

    @RequestMapping(value = "{/id}", method = RequestMethod.DELETE)
    public void deleteItem(@PathVariable Integer id) {
        itemRepository.delete(id);
    }
}
