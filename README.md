## Counter App | ReactJs
- Counter App is simple counting app either either increment/decrement by 1 or update by certain number.
- App is built using ReactJs [built tool used: Vite] <br>
Now, head over to your Terminal[being in project directory]
#### Commands to create React starter template using Vite
```bash
npm create vite@latest
```
#### Then create install all necessary dependencies/packages to run the app
```bash
npm i
```
#### Run the starter react template
```bash
npm run dev
```

#### For using this project in your system skip first command

#### Concepts learned
- props have read only property
- props are used only to pass the data from parent to child component
- If we have to change the data, user interactivity, handleEvent then we have to use "state" of reactJs
- "state" are the react object used to handle user interactivity

#### Some important question & answers
Q. Named and Default export ? <br>
Ans: export function without using "default export <functionName>".
So, in that case a same exact name(i.e import {funcName} from "./App"; ) of function should be used in
order to import it.
However, in default export function could be exported via any name 
in index.js file.

Q. Difference b/w regular Js function & React component ? <br>
Ans: Regular js function may or may not begin with capital
leters but react component name should begin with uppercase

Q. Difference b/w props & states ? <br>
Ans: props is the "read only data" passed as argument from parent to child component in reactJs; so data is not modified here using props.
Whereas, states is the data which be updated and passed from parent to child component 

#### States implementation
```jsx
let [count, setCount] = useSate(0);
```
Here, ```count``` is the variable whose initial value is set to 0 and ```setCount``` is used to update this variable.

#### To use Js inside inside the html we enclose code in {}, as shown below
```jsx
<h1 className={count > 0 ? "green" : count < 0 ? "red" : null}>
    {count}
</h1>
```
Here, I tried to change the className(class is predefined in Js) using Js.

#### Counter App : https://fv8zzq.csb.app/
##### ~ Any suggestions/improvements are welcome...:)
