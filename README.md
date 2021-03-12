<h1 align="center">
    <p>React</p>
    <img height='28px' src="https://img.shields.io/badge/react-concept.%20hooks-rebeccapurple" alt="React" />
</h1>

<div>
    <h3>React</h3>
    <p>
        React.js դա JavaScript գրադարան է, որը նախատեսված է SPA(Single-page application) ստեղծելու համար։
    </p>
    <h3>Բազային հասկացողություններ՝ </h3>
    <ul>
        <li>
            <b>Component</b>- Դա ոչ մեծ, ինքնուրույն, բազմա օգտագործվող UserInterface(ֆռագմենտ) է։<br /> 
            Code-ի մի մասն է որը ներկայացնում է` interface: Js-ում ֆունկցիա է։<br /> 
            class App extends PureComponent {<br />
                render() {<br />
                    return (<br />
                        <div>Hello Component</div>
                    )<br />
                }<br />
            }<br />
        </li>
        <li>
            <b>Class Component</b>- Այլևս չի օգտագործվում։<br />
            <b>Function Component</b>- Հիմնական ձևը կոմպոնենտ ստեղծելու։
        </li>
        <li>
            <b>Stateless</b>- Component որը ներքին state չունի։<br />
            <b>Statefull</b>-Class component
        </li>
        <li>
            <b>Dump Component</b> - Հիմար կոմպոնենտ, նախատեսված է միայն դիզայնի համր, որևէ տրամաբանություն չունի իր մեջ։<br />
            <b>Smart Component</b> - Խելացի կոմպոնենտ, իր մեջ ունի տրամաբանություն(բիզնես, ...) և օգտագործում է Dump-ին, նկարչության համր։
        </li>
        <li>
            <b>JSX</b> - JavaScript Syntax Extension (end XML): Ընդլայնում է JavaScript-ի հնարավորությունները և ավելի հեշտացնեում է UI-ի հետ աշխատելը։
        </li>
        <li>
            <b>Props</b>- Տվյալների տեսակ։ Նախատեսված է կոմպոնենտից մեկ այլ կոմպոնենտին տվայալ փոխանցել։ Այն չի փոխվում Child-ի կողմից։ Parent->Child`
            <ExampleComponent props={props} />
            <br />
            <b>State</b>- Տվյալների տեսակ։ Նկարագրում է կոմպոնենտի ներքին վիճակը։ Ի տարբերություն Props-ի այն կարելի փոփոխել լեկալ, ժամանակի ընթացքում։<br />
            setState() - Թարմացնում է State-ի արժեքը՝ this.setState({a: "changeData"}), ասինխրոն ֆունկցիա է։<br />
            State/Props փոփոխությունները բերում են կոմպոնենտի render(): forceUpdate()
        </li>
        <li>
            <b>ref</b> - Թույլ է տալիս դիմել կոնկրետ DOM Element-ին և վերցնել նրա value։ let ref = React.createRef<br />
            <b>key</b> - Element-ին ունիկալ id, որով ՛՛կապ՛՛ է հաստատվում recat.element-իհետ, update է եղել թե ոչ՝ VDOM(prev) - VDOM(next), ավելացնել փոփոխությունը թե ոչ։<br />
            <b>Export(default/Import)</b> -[[Export]], [[Import]] ES-modul որտեղ պահվում են link-եր: Ոչ ակնհայտ օբեկտներ, որին դիմել չենք կարող ուղղակի։ 
        </li>
        <li>
            <b>Uncontrolled Component</b> - value-ն ստանալ՝ ref-ի օգնությամբ։<br />
            <b>Controlled Component</b> - value-ն ստանալ՝ state/props-ի օգնությամբ։ React-ը ղեկավարում է Element-ը</br>
            <b>Shallow Rendering</b> - Child-> node-> refresh</br>
            <b>Deep Rendering</b> - Parent-> Child-> node-> refresh։</br>
        </li>
        <li>
            <b>Virtual DOM(VDOM)</b>- Տվյալների կառուցվածի հիշապատկեր է՝ քեշ հիշողություն է։ Հետևում է փոփոխությանը և համեմատում է իրար հետ VDOM և DOM, որի արդյունքում թարմացվում է Interface-ի այն բաժինը որը ենթարկվել է փոփոխության։ Web-ում ամենա ծանր օպերացիան DOM-ի հետ աշխատելն է React-ը
            օպտիմիզացնում է այդ աշխատանքը՝ VDOM + Refresh:<br />
            <b>React Fiber</b>- Դա ներքին կադրեի stack է(գրված oCamel լեզվով): Reconcilation algorithm-ի նոր տարբերակն է Reactv16․6:<br />
            <i>ա)</i> Կանգնեցնել աշխատանքը և դրան հետ վերադառնալ ավելի ուշ։ React.Suspense<br />
            <i>բ)</i> Priority տալ տարբեր աշխատանքներին։<br />
            <i>գ)</i> Չեղարկել այն աշխատանքը որը այլևս պետք չէ։<br />
            React Fiber թույլ է տալիս onGoing Render-ները ղեկավարել և դրա հետևանք եղավ փոխվեցին Lifecycle-ները(WillResiveProps, WillMount, WillUpdate), քանի որ մինչ React-ի գործելը, ինչ-որ կողմնակի տրամաբանություն է մտնում։<br />
            <b>React Fire</b>- Հետ է վերադարձնում իրական DOM-ի Event-ը։ CRP-ին՝ DOM-CSSOM-RenderTree(JS run)-Leyout-Paint-Composite:<br />
            <b>Concurrent React(Asinchron React)</b>- Կարողանալ ղեկավարել մեր App-ի վրա ինչ-որ բան երևա, ինչ-որ բան կորի ինչ-որ մի տեղ և այս ամենը կատարի React-ը։ Concurrent React ունի 2 հատկություն՝ React Time Slicing, React Suspense;
        </li>
        <li>
             <b>React Component Lifecycle</b>- React ստեղծում է բոլոր անհրաժեշտ DOM էլեմենտները "ընթացքում": Component-ները ստեղծվում են, "զարգանում" են թարմացումնների միջոցով, իսկ հետո մեռնում են(ապամոնտաժվում են DOM-ից) այս պռոցեսը կոչվում է Lifecycle։ Կոմպոնենտի կյանքի տարբեր փուլերում մենք կարող ենք փոխազդել դրա վրա։ Դրա համար կա 4 փուլ՝
             <ul>
                <li>Initialization</li>
                <li>Mounting</li>
                <li>Update</li>
                <li>Unmounting</li>
             </ul>
        </li>
        <li>
            <b>React Problems`</b><br />
            <i>ա)</i> Wrapper Hell։<br />
            <i>բ)</i> Huge Component <br />
            <i>գ)</i> Some class issue<br />
            <i>դ)</i> "Գիտական*" մակարդակի իջեցում, շուկայում իր տեղը պահպանելու համր <br />
            <i>ե)</i> "Երևակայական ազատություն*" = "անառխիա", որը բերում է ոչ ստանդարտիզացված ծրագրային կառուցվածքների*
        </li>
    </ul>
</div>

<table><tr>
<td valign="top" width="50%">
<div align="center">
<h6> <b> Quick start </b> </h6>
<h6> Use the package manager <b>npm</b> or <b>yarn</b>. </h6>
</div>
<div align="center"> 

 ```sh
$yarn run start
$yarn run build
$yarn run test
$yarn run eject
```

</div></td><td valign="top" width="50%">
 <div align="center">
<h6><b>File Structure</b></h6>
</div>
<div> 

```sh
.
│   index.js
│
├───Hooks
│   │   CombineAdditionalHook.jsx
│   │   CombineBasicHook.jsx     
│   │   CombineCustomHook.jsx    
│   │   README.md
│   │
│   ├───Additional
│   │       useCallback.jsx      
│   │       useDebugValue.jsx
│   │       useImperativeHandle.jsx
│   │       useLayoutEffect.jsx
│   │       useMemo.jsx
│   │       useReducer.jsx
│   │       useRef.jsx
│   │
│   ├───Basic
│   │       useContext.jsx
│   │       useEffect.jsx
│   │       useState.jsx
│   │
│   └───Custom
│           useDebounce.jsx
│           useHover.jsx
│           useInput.jsx
│           useRequest.jsx
│           useScroll.jsx
│
└───View
        View.jsx

```
</div>
</td>
</tr></table> 
 
