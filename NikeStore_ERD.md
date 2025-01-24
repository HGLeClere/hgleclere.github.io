
# Nike Store Entity Relationship Diagram 

```mermaid
erDiagram
PRODUCT |<--|< SALE

CUSTOMER ||--|< SALE

SALE 0<--0< Inventory

INVENTORY 0<--||

```
