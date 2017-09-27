
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

(generate a new applications, default prefix/folder is app if unspecified:)
ng new hello-work --prefix hw


ng generate commands:

ng generate class           //ts class
ng generate component       //UI component
ng generate directive       //custom element or attribute to extend html  (think *ngIf built-in structural directive)
ng generate enum            //ts enum
ng generate guard           //routing guard
ng generate interface       //ts interface
ng generate module          //modules to encapsulate subsystem, core helpers
ng generate pipe            //filters, formatters |
ng generate service         //data access