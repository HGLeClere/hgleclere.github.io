
# Nike Store Entity Relationship Diagram 

```mermaid
erDiagram

product ||--o{ sales : output_to_store

product { 
    Primary_Key Product_ID
    Key Color
    Key Size
 
}

customer |{--|{ sales : orders
customer {
    Primary_Key Cust_ID
    Key Name
    Key PhoneNumber
}
sales {
    Primary_Key Sales_ID
    Key OrderNumber
    Key Date
    Key AmountOfSale
}
inventory o{--o| product : in_stock
inventory {
    Primary_Key Product_ID
    Key NumberInStock
}
```
### This digram shows the relationship between the Nike inventory and getting the product out to the customer.
### It is to help set up the new database that Nike is planning in it's upgrade to add new stores.
