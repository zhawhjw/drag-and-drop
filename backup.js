// import React, { Component } from 'react';
// import {RangeStepInput} from 'react-range-step-input'
// import {forceNumber} from "react-range-step-input/lib/utils";
// import Carousel from 'react-multi-carousel';
// import ExtractData from "./data/extracted.json"
// import { SliderComponent } from '@syncfusion/ej2-react-inputs';
// // import data from "./data/Animation Statistic.json"
//
// import Video from './VideoComponent'
// import './App.css';
// import 'react-multi-carousel/lib/styles.css';
//
//
// // function mapData(){
// //   return data.map((val, i) => val);
// // }
//
//
// function readJSON(){
//     return ExtractData.map((val, i) => val);
// }
//
// function removePeople(new_marked, prev) {
//     let array = [...new_marked]; // make a separate copy of the array
//     let index = array.indexOf(prev  )
//     if (index !== -1) {
//         array.splice(index, 1);
//
//     }
//     return array;
// }
//
// function initialSliderTasks(){
//     return [
//         {category:"distance", value:0},
//         {category:"height", value:0},
//         {category:"frame", value:0},
//
//     ]
// }
//
// function initialTasks(){
//     return [
//         {id: 1, name:"Vertical-Up-To-Down",category:"attcktype", pre:"attcktype", bgcolor: "yellow"},
//         {id: 2, name:"Diagonal-UpLeft-To-LowRight", category:"attcktype", pre:"attcktype",bgcolor:"red"},
//         {id: 3, name:"Diagonal-UpRight-To-LowLeft", category:"attcktype", pre:"attcktype",bgcolor:"blue"},
//         {id: 4, name:"Diagonal-LowLeft-To-UpRight", category:"attcktype", pre:"attcktype",bgcolor:"green"},
//         {id: 5, name:"Diagonal-LowRight-To-UpLeft", category:"attcktype", pre:"attcktype",bgcolor:"purple"},
//         {id: 6, name:"Horizontal-Left-To-Right", category:"attcktype", pre:"attcktype",bgcolor:"cyan"},
//         {id: 7, name:"Horizontal-Right-To-Left", category:"attcktype", pre:"attcktype",bgcolor:"orange"},
//         {id: 8, name:"Thrust", category:"attcktype", pre:"attcktype",bgcolor:"pink"},
//     ]
// }
//
// function initialMarked(){
//     return [];
// }
//
// function initialMotionState(){
//
//     return {
//         tasks: initialTasks(),
//
//         slider_tasks: initialSliderTasks(),
//
//         marked:initialMarked(),
//     }
// }
//
//
// export default class AppDragDropDemo extends Component {
//
//     state = {
//
//         horizontal_factor: NaN,
//         vertical_factor: NaN,
//         frame_factor: NaN,
//         frame_min : NaN,
//
//         current: 'Sword_Attack_Ushort',
//         current_tasks: initialTasks(),
//         current_slider: initialSliderTasks(),
//         current_marked: initialMarked(),
//         // all motion dictionary
//         motion_dict: {
//             'Sword_Attack_Ushort': initialMotionState(),
//         },
//
//         // value:0.5
//     }
//
//
//
//     handleCheck = (e, i) => {
//         // alert(i);
//
//         if(i === this.state.current){
//             return;
//         }
//
//         // this.setState({current: i});
//         let new_item;
//         // if the item does not existed
//         if(!this.state.motion_dict.hasOwnProperty(i)){
//
//             new_item = { ...this.state.motion_dict,  [i]: initialMotionState() };
//
//             // after changed
//             this.setState({motion_dict: new_item}, function () {
//                 // console.log(this.state);
//             });
//
//             // set current state
//
//         }else{
//             new_item = {...this.state.motion_dict};
//
//         }
//
//         this.setState({
//                 current: i,
//                 current_tasks: new_item[i].tasks,
//                 current_slider: new_item[i].slider_tasks,
//                 current_marked: new_item[i].marked
//
//             }, function () {
//                 // console.log(this.state);
//             }
//
//         );
//
//     }
//
//     onClick = (e, name) => {
//         // this.state.current =
//
//         this.setState({current: name});
//
//     }
//
//     onChange = (e, category) => {
//         // get current slider value
//         let new_value = forceNumber(e.target.value);
//
//         // looping to find changed slider and change its value
//         let new_current_slider = this.state.current_slider.filter((slider_task) => {
//             // if find same category
//             if (slider_task.category === category){
//                 slider_task.value = new_value;
//             }
//             return slider_task;
//         });
//
//         // save to current state
//         this.setState({current_slider: new_current_slider});
//
//         // save to preserved state
//         let new_item = { ...this.state.motion_dict,  [this.state.current]: {tasks: this.state.current_tasks, slider_tasks: new_current_slider, marked: this.state.current_marked} };
//         this.setState({motion_dict: new_item});
//
//     }
//
//     onDragStart = (ev, id, category, prev) => {
//         ev.dataTransfer.setData("id", id);
//         ev.dataTransfer.setData("category", category);
//         ev.dataTransfer.setData("prev", prev);
//
//     }
//
//     onDragOver = (ev) => {
//         ev.preventDefault();
//     }
//
//
//     onDrop = (ev, cat) => {
//
//         let id = ev.dataTransfer.getData("id");
//         // let category = ev.dataTransfer.getData("category");
//         let prev = ev.dataTransfer.getData("prev");
//
//         let new_marked = this.state.current_marked;
//         let new_state = this.state.current_tasks.filter((task) => {
//
//
//             if (task.name === id) {
//
//                 // if you do not plan to pu label in LABEL area, then it won't change anything
//                 if(cat === "label") {
//                     // if it is LABEL area
//
//                     // if other tag has same category existed
//                     let exist = this.state.current_marked.some(value => value === prev);
//
//                     // stop if it has
//                     if(exist===true){
//                         return task;
//                         // push this tag in if no
//                     }else {
//                         new_marked = [...new_marked, prev];
//                     }
//
//                     // change current category of tag
//                     task.category = cat;
//
//                 }else if (cat === prev){
//                     // change current category of tag
//
//                     task.category = cat;
//                     new_marked = removePeople(new_marked, prev);
//
//                 }
//             }
//
//             return task;
//         });
//
//         // save to current state
//         this.setState({
//             current_tasks: new_state,
//             current_marked: new_marked
//         });
//
//         // save to preserved state
//         let new_item = { ...this.state.motion_dict,  [this.state.current]: {tasks: this.state.current_tasks, slider_tasks: this.state.current_slider, marked: this.state.current_marked} };
//         this.setState({motion_dict:new_item});
//
//
//     }
//
//     render() {
//
//         // const items = [...Array(100)].map((val, i) => `Item ${i}`);
//         // console.log(items);
//
//         const data_array = readJSON();
//
//
//         let hmax = 0;
//         let vmax = 0;
//         let fmax = 0;
//         let fmin = Number.MAX_SAFE_INTEGER;
//
//         data_array.forEach((row)=>{
//
//             if (row.Horizontals[1] > hmax){
//                 hmax = row.Horizontals[1];
//             }
//
//             if (row.Verticals[1] > vmax){
//                 vmax = row.Verticals[1];
//             }
//
//             if (row.Frames[0] > fmax){
//                 fmax = row.Frames[0];
//             }
//
//             if (row.Frames[0] < fmin){
//                 fmin = row.Frames[0];
//             }
//
//         });
//
//
//
//
//
//
//
//         // console.log(data_array);
//
//         const responsive = {
//             desktop: {
//                 breakpoint: { max: 3000, min: 1024 },
//                 items: 3,
//                 slidesToSlide: 3 // optional, default to 1.
//             },
//             tablet: {
//                 breakpoint: { max: 1024, min: 464 },
//                 items: 2,
//                 slidesToSlide: 2 // optional, default to 1.
//             },
//             mobile: {
//                 breakpoint: { max: 464, min: 0 },
//                 items: 1,
//                 slidesToSlide: 1 // optional, default to 1.
//             }
//         };
//
//
//         let tasks = {
//             video:[],
//             label:[],
//             attcktype: [],
//             distance:[],
//             height:[],
//             frame:[],
//             grids:[]
//         }
//
//         this.state.current_tasks.forEach ((t) => {
//             tasks[t.category].push(
//                 <div id = {t.id} key={t.name}
//                      onDragStart = {(e) => this.onDragStart(e, t.name, t.category, t.pre)}
//                      draggable
//                      className="draggable"
//                      style = {{backgroundColor: t.bgcolor}}
//                 >
//                     {t.name}
//                 </div>
//             );
//         });
//
//
//
//         // the local min max when filter applies
//         let h_limit_max = 1;
//         let h_limit_min = 0;
//
//         let v_limit_max = 1;
//         let v_limit_min = 0;
//
//         let f_limit_max = 1;
//         let f_limit_min = 0;
//
//
//         if (tasks.label.length !== 0){
//
//             let lhmax = 0;
//             let lhmin = Number.MAX_SAFE_INTEGER;
//
//             let lvmax = 0;
//             let lvmin = Number.MAX_SAFE_INTEGER;
//
//             let lfmax = 0;
//             let lfmin = Number.MAX_SAFE_INTEGER;
//
//             data_array.forEach((row)=>{
//                 if (row.Attacks.some(item => item === tasks.label[0].props.id)){
//
//                     if (row.Horizontals[1] > lhmax){
//                         lhmax = row.Horizontals[1];
//                     }
//
//                     if (row.Horizontals[1] < lhmin){
//                         lhmin = row.Horizontals[1];
//                     }
//
//                     if (row.Verticals[1] > lvmax){
//                         lvmax = row.Verticals[1];
//                     }
//
//                     if (row.Verticals[1] < lvmin){
//                         lvmin = row.Verticals[1];
//                     }
//
//                     if (row.Frames[0] > lfmax){
//                         lfmax = row.Frames[0];
//                     }
//
//                     if (row.Frames[0] < lfmin){
//                         lfmin = row.Frames[0];
//                     }
//                 }
//             });
//
//             h_limit_max = (lhmax) / (hmax);
//             h_limit_min = (lhmin) / (hmax);
//
//             v_limit_max = (lvmax) / (vmax);
//             v_limit_min = (lvmin) / (vmax);
//
//             f_limit_max = (lfmax - fmin) / (fmax - fmin);
//             f_limit_min = (lfmin - fmin) / (fmax - fmin);
//
//         }
//
//
//         const limits = {
//             distance: { enabled: true, minStart: h_limit_min, minEnd: h_limit_max },
//             height: { enabled: true, minStart: v_limit_min, minEnd: v_limit_max },
//             frame: { enabled: true, minStart: f_limit_min, minEnd: f_limit_max },
//
//         }
//
//
//         this.state.current_slider.forEach ((t) => {
//             tasks[t.category].push(
//                 <div>
//                     <RangeStepInput min = {0} max = {0} value={t.value} step={0.01} onChange={(e)=>{this.onChange(e, t.category)}} hold={true}/>
//                     {/*<SliderComponent value={this.value} type='MinRange' min={0} max={1} limits={limits[t.category]}*/}
//                     {/*                 tooltip={true} />*/}
//                     {t.value}
//                 </div>
//             );
//         });
//
//         // console.log(tasks);
//         console.log(tasks);
//         // console.log(tasks.label.length > 0);
//
//         data_array.forEach((row)=>{
//             // console.log(row); <img className="Header-logo" src={"/Gifs/"+ row.Name +"_0.gif"} alt={row.Name} width="300" height="200" />
//
//             let normalized_h = (row.Horizontals[1] - 0) / (hmax);
//             let normalized_v = (row.Verticals[1] - 0) / (vmax);
//             let normalized_f = (row.Frames[0] - fmin) / (fmax - fmin);
//
//             // console.log(normalized_h + ", " + normalized_v + ", " + normalized_f);
//             console.log(tasks.distance[0].props.value + ", " + tasks.height[0].props.value + ", " + tasks.frame[0].props.value);
//
//             // check if current label area is empty
//             if (tasks.label.length === 0){
//
//                 if(tasks.distance[0].props.children[0].props.value <= normalized_h
//                     && tasks.height[0].props.children[0].props.value <= normalized_v
//                     && tasks.frame[0].props.children[0].props.value <= normalized_f){
//
//                     tasks['grids'].push(
//                         <button
//                             className="motionButton"
//                             name = {row.Name}
//                             hscore = {normalized_h}
//                             vscore = {normalized_v}
//                             fscore = {normalized_f}
//                             tscore = {normalized_h + normalized_v + normalized_f}
//
//                             onClick= {(e) => this.onClick(e, row.Name)}
//                         >{row.Name}</button>
//                     );
//
//                 }
//
//
//
//             }else {
//
//                 if (row.Attacks.some(item => item === tasks.label[0].props.id)) {
//
//                     if(tasks.distance[0].props.children[0].props.value <= normalized_h
//                         && tasks.height[0].props.children[0].props.value <= normalized_v
//                         && tasks.frame[0].props.children[0].props.value <= normalized_f){
//
//                         tasks['grids'].push(
//                             <button
//                                 className="motionButton"
//                                 name = {row.Name}
//                                 hscore = {normalized_h}
//                                 vscore = {normalized_v}
//                                 fscore = {normalized_f}
//                                 tscore = {normalized_h + normalized_v + normalized_f}
//
//                                 onClick= {(e) => this.onClick(e, row.Name)}
//                             >{row.Name}</button>
//                         );
//
//                     }
//
//
//                 }
//             }
//
//         });
//
//
//         tasks['grids']
//             .sort((a, b) => a.props.hscore + a.props.vscore + a.props.fscore > b.props.hscore + b.props.vscore + b.props.fscore ? 1 : -1).map((item, i) =>
//             <button
//                 className="motionButton"
//                 name = {item.props.name}
//                 hscore = {item.props.hscore}
//                 vscore = {item.props.vscore}
//                 fscore = {item.props.fscore}
//                 tscore = {item.props.tscore}
//
//                 onClick= {(e) => this.onClick(e, item.props.name)}
//             >{item.props.name}</button>
//         );
//
//         // tasks.grids = est;
//
//         // const images = importAll(require.context('./public/Gifs/', false, /\.gif/));
//
//         // console.log(images)
//
//         return (
//             <div className="container-drag">
//                 <h2 className="header">DRAG & DROP DEMO</h2>
//
//
//                 <Carousel
//                     swipeable={true}
//                     draggable={true}
//                     showDots={true}
//                     responsive={responsive}
//                     ssr={true} // means to render carousel on server-side.
//                     infinite={true}
//                     autoPlay={false}
//                     autoPlaySpeed={1000}
//                     keyBoardControl={true}
//                     customTransition="all .5"
//                     transitionDuration={500}
//                     containerClass="carousel-container-with_scrollbar"
//                     removeArrowOnDeviceType={["tablet", "mobile"]}
//                     deviceType="desktop"
//                     dotListClass="custom-dot-list-style"
//                     // itemClass="carousel-item-padding-40-px"
//                     itemClass="slider-image-item-padding-10-px"
//                 >
//
//                     {tasks.grids}
//                 </Carousel>
//
//                 <div className="video">
//                     <span className="task-header">Video</span>
//                     <Video url = {this.state.current}/>
//                 </div>
//
//                 <div className="label"
//                      onDragOver={(e)=>this.onDragOver(e)}
//                      onDrop={(e)=>{this.onDrop(e, "label")}}>
//                     <span className="task-header">Filter Area</span>
//                     {tasks.label}
//                 </div>
//
//                 <div className="attcktype"
//                      onDragOver={(e)=>this.onDragOver(e)}
//                      onDrop={(e)=>{this.onDrop(e, "attcktype")}}>
//                     <span className="task-header">Attack Type</span>
//                     {tasks.attcktype}
//                 </div>
//
//
//                 <div className="distance" >
//                     <span className="task-header">Distance</span>
//                     {tasks.distance}
//                 </div>
//
//                 <div className="height" >
//                     <span className="task-header">Height</span>
//                     {tasks.height}
//                 </div>
//
//                 <div className="frame" >
//                     <span className="task-header">Frame</span>
//                     {tasks.frame}
//                 </div>
//
//             </div>
//         );
//     }
// }
