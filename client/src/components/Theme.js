// // this file has three examples of composing nexted
// // providers and consumers in a single component
// // normally you wouldn't have your entire app in a single component like this
// // and you wouldn't normally put a consumer right below a provider
// // (consumers will likely be lower in your tree) so the nesting wont
// // often be as big of a problem.
// // however, if you ever do face huge nesting problems,
// // react-composer is here to help!
// import React from "react";
// // import Composer from "react-composer";
// // import { connect } from "mongoose";
// // import { useStrict } from "mobx";
// import { observable, actions, computed } from "mobx";
// import { observer } from "mobx-react";
// import { timingSafeEqual } from "crypto";
// // import { render } from "react-dom";

// @observer
// class TodoList extends React.Component {
//   render() {
//     const store = this.props.store;
//     return (
//       <div>
//         {store.report}
//         <ul>{store.todos.map(
//           (todo, idx) => <TodoView todo={ todo } key={ idx } />
//         )}</ul>
//         { store.pendingRequests > 0 ? <marquee>Loading... </marquee> : null }
//         <button onClick={ this.onNewTodo }>New Todo</button>
//         <small> (double-click a todo to edit) </small>
//         <RenderCounter />
//       </div>
//     );
//   }

//   onNewTodo = () => {
//     this.props.store.addTodo(prompt('Enter a new todo:, coffee pla'))
//   }
// }

// @observer
// class TodoView extends React.Component {
//   render() {
//     const todo = this.props.todo
//     return (
//       <li onDoubleClick={ this.onRename }  >
//         <input
//           type='checkbox'
//           checked={ todo.completed }
//           onChange={ this.onToggleCompleted }
//         />
//         { todo.task }
//         { todo.assignee ? <small> { todo.assignee.name } </small> : null }
//         <RenderCounter />
//       </li>
//     )
//   }

//   onToggleCompleted = () => {
//     const todo = this.props.todo;
//     todo.completed = !todo.completed;
//   }

//   onRename = () => {

//   }

// }

// const map = observable.map({ key: "value" });
// map.set("key", "new value");

// const list = observable([1, 4, 2]);
// list[3] = 8;

// const person = observable({
//   firstName: "Clive staples",
//   lastName: "lewis"
// });
// person.firstName = "CS";

// const temperature = observable.box(20);
// temperature.set(25);

// var timerData = observable({
//   secondsPassed: 0
// });

// setInterval(() => {
//   timerData.secondsPassed++;
// }, 1000);

// @observer
// class Timer extends React.Component {
//   render() {
//     return <span> Seconds passed: {this.props.timerData.secondsPassed} </span>;
//   }
// }

// class TodoStore {
//   todos = [];

//   get completedTodosCount() {
//     return this.todos.filter(todo => todo.completed === true).length;
//   }

//   report() {
//     if (this.todos.length === 0) {
//       return "<none>";
//     } else {
//       return (
//         `Next todo: "${this.todos[0].task}."` +
//         `Progress: ${this.completedTodosCount} / ${this.todos.length} `
//       );
//     }
//   }

//   addTodo(task) {
//     this.todos.push({
//       task: task,
//       completed: false,
//       assignee: null
//     });
//   }
// }

// const todoStore = new TodoStore();
// todoStore.addTodo("read MobX tutorial");
// console.log(todoStore.report());

// todoStore.addTodo("try MobX");
// console.log(todoStore.report());

// todoStore.todos[0].completed = true;
// console.log(todoStore.report());

// class ObservableTodoStore {
//   @observable todos = [];
//   @observable pendingRequests = 0;

//   constructor() {
//     // mobx.autorun(() => console.log(this.report));
//   }

//   @computed
//   get completedTodosCount() {
//     return this.todos.filter(todo => todo.completed === true).length;
//   }

//   @computed
//   get report() {
//     if (this.todos.length === 0) {
//       return "<none>";
//     } else {
//       return (
//         `Next todo: "${this.todos[0].task}". ` +
//         `Progress: ${this.completedTodosCount}/${this.todos.length}`
//       );
//     }
//   }

//   addTodo(task) {
//     this.todos.push({
//       task: task,
//       completed: false,
//       assignee: null
//     });
//   }
// }

// const observableTodoStore = new ObservableTodoStore();
// observableTodoStore.addTodo("read Mobx tutorial");
// observableTodoStore.addTodo("try Mobx");
// observableTodoStore.todos[0].completed = true;
// observableTodoStore.todos[1].task = "try something";

// class TimerClass extends React.Component {
//   render() {
//     return <Timer timerData={timerData} />;
//   }
// }

// export default TimerClass;

// // class CompanyStore {
// //   constructor () {
// //      @observable infos = observable.map(infosModel);
// //   }

// //   @action
// //   loadData = async(params) => {
// //     this.loading = true;
// //     this.errors = {};
// //     return this.$fetchBasicInfo(params).then(action(({ data }) => {
// //       let basicInfo = data.data;
// //       const preCompanyInfo = this.infos.get('companyInfo');
// //       this.infos.set('companyInfo', Object.assign(preCompanyInfo, basicInfo));
// //       return basicInfo;
// //     }));
// //   }

// //   $fetchBasicInfo(params) {
// //     return fetch({
// //       ...API.getBasicInfo,
// //       data: params
// //     })
// //   }
// // }

// // // class CompanyContainer extends React.Component {
// // //   componentDidMount() {
// // //     this.props.loadData({})
// // //   }
// // //   render() {
// // //     return (
// // //       <Company
// // //         infos={this.props.infos}
// // //         loading={this.props.loading}
// // //       />
// // //     )
// // //   }
// // // }

// // // const mapStateToPorps = (state) => {
// // //   return {
// // //     infos: state.companyStore.infos,
// // //     loading: state.companyStore.loading
// // //   }
// // // }

// // // const mapDispatchToProps = dispatch => {
// // //   return bindActionCreators({
// // //     loadData: loadData
// // //   }, dispatch);
// // // }

// // // export default connect(mapStateToPorps, {loadData})(CompanyContainer);

// // @inject('companyStore')
// // @observer

// // class CompanyContainer extends React.Component {
// //   componentDidMount() {
// //     this.props.companyStore.loadData({});
// //   }

// //   render () {
// //     console {infos, loading} = this.props.companyStore;
// //     return <Company infos={infos} loading={loading} />
// //   }
// // }

// // const ThemeContext = React.createContext('light')

// // class ThemeProvider extends React.Component {
// //   state = {theme: 'light'}
// //   toggleTheme = () => {
// //     this.setState(({theme}) => ({
// //       theme: theme === 'light' ? 'dark' : 'light',
// //     }))
// //   }
// //   render() {
// //     return (
// //       <ThemeContext.Provider value={this.state.theme}>
// //         {this.props.children({toggleTheme: this.toggleTheme})}
// //       </ThemeContext.Provider>
// //     )
// //   }
// // }
// // // only doing this to shield end-users from the
// // // implementation detail of "context"
// // const ThemeConsumer = ThemeContext.Consumer

// // const LanguageContext = React.createContext('en')
// // class LanguageProvider extends React.Component {
// //   state = {lang: 'en'}
// //   setLanguage = lang => {
// //     this.setState({lang})
// //   }
// //   render() {
// //     return (
// //       <LanguageContext.Provider value={this.state.lang}>
// //         {this.props.children({setLanguage: this.setLanguage})}
// //       </LanguageContext.Provider>
// //     )
// //   }
// // }

// // const LanguageConsumer = LanguageContext.Consumer

// // const styles = {
// //   light: {
// //     padding: 20,
// //     backgroundColor: 'white',
// //     color: 'black',
// //   },
// //   dark: {
// //     padding: 20,
// //     backgroundColor: 'black',
// //     color: 'white',
// //   },
// // }

// // const translations = {
// //   en: {
// //     light: 'light',
// //     dark: 'dark',
// //   },
// //   es: {
// //     light: 'claro',
// //     dark: 'oscuro',
// //   },
// //   de: {
// //     light: 'hell',
// //     dark: 'dunkel',
// //   },
// // }

// // // nested big time
// // function AppNested() {
// //   return (
// //     <LanguageProvider>
// //       {({setLanguage}) => (
// //         <ThemeProvider>
// //           {({toggleTheme}) => (
// //             <LanguageConsumer>
// //               {lang => (
// //                 <ThemeConsumer>
// //                   {theme => (
// //                     <div
// //                       style={{
// //                         zoom: 2,
// //                         textAlign: 'center',
// //                         border: '1px solid',
// //                       }}
// //                     >
// //                       <div style={styles[theme]}>
// //                         <button onClick={toggleTheme}>
// //                           {translations[lang][theme]}
// //                         </button>
// //                         <select
// //                           value={lang}
// //                           onChange={e => setLanguage(e.target.value)}
// //                         >
// //                           <option value="en">en</option>
// //                           <option value="es">es</option>
// //                           <option value="de">de</option>
// //                         </select>
// //                       </div>
// //                     </div>
// //                   )}
// //                 </ThemeConsumer>
// //               )}
// //             </LanguageConsumer>
// //           )}
// //         </ThemeProvider>
// //       )}
// //     </LanguageProvider>
// //   )
// // }

// // // using composer inline
// // function AppComposed() {
// //   return (
// //     <Composer components={[<LanguageProvider />, <ThemeProvider />]}>
// //       {([{setLanguage}, {toggleTheme}]) => (
// //         <Composer components={[<LanguageConsumer />, <ThemeConsumer />]}>
// //           {([lang, theme]) => (
// //             <div
// //               style={{
// //                 zoom: 2,
// //                 textAlign: 'center',
// //                 border: '1px solid',
// //               }}
// //             >
// //               <div style={styles[theme]}>
// //                 <button style={{cursor: 'pointer'}} onClick={toggleTheme}>
// //                   {translations[lang][theme]}
// //                 </button>
// //                 <select
// //                   value={lang}
// //                   onChange={e => setLanguage(e.target.value)}
// //                 >
// //                   <option value="en">en</option>
// //                   <option value="es">es</option>
// //                   <option value="de">de</option>
// //                 </select>
// //               </div>
// //             </div>
// //           )}
// //         </Composer>
// //       )}
// //     </Composer>
// //   )
// // }

// // // extracting the composer part
// // function AppSuperComposeRenderer({children}) {
// //   return (
// //     <Composer components={[<LanguageProvider />, <ThemeProvider />]}>
// //       {([{setLanguage}, {toggleTheme}]) => (
// //         <Composer components={[<LanguageConsumer />, <ThemeConsumer />]}>
// //           {([lang, theme]) => children({setLanguage, toggleTheme, lang, theme})}
// //         </Composer>
// //       )}
// //     </Composer>
// //   )
// // }

// // // so we can shove that nesting asside!
// // function AppSuperCompose() {
// //   return (
// //     <AppSuperComposeRenderer>
// //       {({setLanguage, toggleTheme, lang, theme}) => (
// //         <div
// //           style={{
// //             zoom: 2,
// //             textAlign: 'center',
// //             border: '1px solid',
// //           }}
// //         >
// //           <div style={styles[theme]}>
// //             <button style={{cursor: 'pointer'}} onClick={toggleTheme}>
// //               {translations[lang][theme]}
// //             </button>
// //             <select value={lang} onChange={e => setLanguage(e.target.value)}>
// //               <option value="en">en</option>
// //               <option value="es">es</option>
// //               <option value="de">de</option>
// //             </select>
// //           </div>
// //         </div>
// //       )}
// //     </AppSuperComposeRenderer>
// //   )
// // }

// // render(<AppSuperCompose />, document.getElementById('root'))
