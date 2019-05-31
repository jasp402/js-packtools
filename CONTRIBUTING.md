# Contribute & community



# Lineamientos para incluir funciones
Pienso que nunca se debe manejarse la documentación en español. Lo más difícil de completar el paquete es que consiste en diferentes funciones que a su vez son diferentes.  

En este sentido se tiene que pensar individualmente en cada una de ella la estructura está bien pero siento que lo laborioso es el hecho de tener que seguir un protocolo rígido por ejemplo

+ Script - documento .JS con la función. Contiene toda la lógica, debe incluir sus dependencias. En caso de requerir constantes. Puede usar la variable `this.c` del constructor. 
Y asignar el valor de la constante en el documento `./costant.js` 

+ jsDoc - esto debe describir los parámetros, retorno de la función y descripción.

+ .md - La documentación va en `/docs/api/{nombre}.md/`  está debe contener lo que hay en el jsDoc. 

+ Test - las pruebas debe ir en `/test/test_{nombre}/` y debe usar mocha.js con describe y it de ser posible usar assert y se debe exponer la mayor cantidad de casos posibles en caso de que la función tenga parámetros predeterminados o no debe pruebas para ambos casos.
