
(generate angular component, --flat does not create new folder structure)
(g is alias for "generate" command, c is alias for component)
ng g c products/product-detail.component --flat
ng generate class 

(generate service: and -m registers with module)
ng g s products/product-guard.service -m
ng generate service 

(generate module, use -m to import into main app.module)
ng g m products/product --flat -m app.module
??invalid >> ng g m product products/product --flat -m app.module
ng generate module

ng g m shared/shared --flat -m products/product.module
