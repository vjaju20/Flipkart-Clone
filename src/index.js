import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Box from '@material-ui/core/Box';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import img1 from './fk-plus.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import StoreIcon from '@material-ui/icons/Store';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import AppsIcon from '@material-ui/icons/Apps';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import avlg from './Avatar_logo.jpg';
import mobile from './mobile.jpg';
import furniture from './furniture.jpg';
import fashion from './fashion.jpg';
import flight from './flight.jpg';
import health from './health.jpg';
import swing from './swing.jpg';
import bksf from './bookshelf.jpg';
import beanbag from './beanbag.jpg';
import sfbd from './sofabed.jpg';
import tab from './tab.jpg';
import wbcm from './webcam.jpg';
import lpsn from './lapskin.jpg';
import trmr from './trimmer.jpg';
import shoes from './shoes.jpg';
import watch from './watch.jpg';
import tees from './tshirt.jpg';
import shades from './shades.jpg';
import mask from './mask.jpg';
import puloxi from './puloxi.jpg';
import vapo from './vaporizer.jpeg';
import mulvit from './mlvit.jpg';

function BadgeNumber() {
	const [count,setCount] = React.useState(0);
	return (
		<>
			<Button id="btncart" variant="contained" color="primary" onClick={()=>{setCount(Math.max(count-1,0))}}><RemoveIcon id="ai"/></Button>
			<span id="qty">Qty</span>
			<Button id="btncart" variant="contained" color="primary" onClick={()=>{setCount(count+1)}}><AddIcon id="ai"/></Button>
			&nbsp;&nbsp;<Badge badgeContent={count} color="secondary"><ShoppingCartIcon id="shci"/></Badge>
		</>
	);
}
function Navdrop(props){
	return (
		<li className="nav-item dropdown mr-sm-2 mr-lg-2">
				<a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown">{props.name}</a>
				<div className="dropdown-menu">
					<a className="dropdown-item text-white" href="#">{props.di1}</a>
					<div className="dropdown-divider"></div>
					<a className="dropdown-item text-white" href="#">{props.di2}</a>
					<div className="dropdown-divider"></div>
					<a className="dropdown-item text-white" href="#">{props.di3}</a>
					<div className="dropdown-divider"></div>
					<a className="dropdown-item text-white" href="#">{props.di4}</a>
					<div className="dropdown-divider"></div>
					<a className="dropdown-item text-white" href="#">{props.di5}</a>
				</div>
		</li>
	)
}
function Cards(props) {
	return (
	<div className="card border-warning">
		<div className="card-header text-primary bg-warning"><strong>{props.mch}</strong></div>
		<div className="card-body">
			<div className="row row-cols-2 row-cols-md-4 g-4">
				<div className="col">
					<div id="anim" className="card border-warning">
						<img src={props.i1} className="card-img-top" height="300px"/>
						<div id="cb" className="card-body">
							<h5 className="card-title">{props.ct1}</h5>
							<p>Rs.{props.p1}</p>
							<BadgeNumber/>
						</div>
					</div>
				</div>
				<div className="col">
					<div id="anim" className="card border-warning">
						<img src={props.i2} className="card-img-top" height="300px"/>
						<div id="cb" className="card-body">
							<h5 className="card-title">{props.ct2}</h5>
							<p>Rs.{props.p2}</p>
							<BadgeNumber/>
						</div>
					</div>
				</div>
				<div className="col">
					<div id="anim" className="card border-warning">
						<img src={props.i3} className="card-img-top" height="300px"/>
						<div id="cb" className="card-body">
							<h5 className="card-title">{props.ct3}</h5>
							<p>Rs.{props.p3}</p>
							<BadgeNumber/>
						</div>
					</div>
				</div>
				<div className="col">
					<div id="anim" className="card border-warning">
						<img src={props.i4} className="card-img-top" height="300px"/>
						<div id="cb" className="card-body">
							<h5 className="card-title">{props.ct4}</h5>
							<p>Rs.{props.p4}</p>
							<BadgeNumber/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	)
}
ReactDOM.render(
  <div>
    <header>
		<nav className="navbar navbar-dark navbar-expand-lg bg-primary">
			<button id="btog" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
      			<span className="navbar-toggler-icon"></span>
    		</button>
			<img className="navbar-brand" id="i1" src={img1}/>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<Navdrop name={'Electronics'} di1={'Cameras & Accessories'} di2={'Gaming'} di3={'Smart Home Automation'} di4={'Laptop Accessories'} di5={'Smart Wearables'}/>
					<Navdrop name={'Fashion'} di1={'Etnics'} di2={'Western'} di3={'Footwear'} di4={'Watches'} di5={'Bags and Wallets'}/>
					<Navdrop name={'Mobiles'} di1={'Realme'} di2={'Apple'} di3={'Motorola'} di4={'Redmi'} di5={'Infinix'}/>
					<Navdrop name={'Home'} di1={'Living Room'} di2={'Bedroom'} di3={'Kitchen & Dining'} di4={'Home Decor'} di5={'Lightings'}/>
					<Navdrop name={'Appliances'} di1={'Washing Machines'} di2={'Air Conditioners'} di3={'Refrigerators'} di4={'Kitchen Appliances'} di5={'Home Appliances'}/>
					<Navdrop name={'Toys'} di1={'Board Games'} di2={'Puzzles'} di3={'Remote Controlled'} di4={'Soft Toys'} di5={'Educational Toys'}/>
					<Navdrop name={'Beauty'} di1={'Face Washes'} di2={'Eye Makeup'} di3={'Hair Styling'} di4={'Body & Skin Care'} di5={'Shaving Essentials'}/>
				</ul>
			</div>
		   	<span id="icons"><Badge variant="dot" color="secondary"><NotificationsIcon/></Badge></span>
			<span id="logos"><Avatar src={avlg}/></span>
	   </nav>
	</header>
	<div id="caro" className="carousel slide" data-bs-ride="carousel">
		<div className="carousel-indicators">
			<button type="button" data-bs-target="#caro" data-bs-slide-to="0" className="active"></button>
			<button type="button" data-bs-target="#caro" data-bs-slide-to="1"></button>
			<button type="button" data-bs-target="#caro" data-bs-slide-to="2"></button>
			<button type="button" data-bs-target="#caro" data-bs-slide-to="3"></button>
			<button type="button" data-bs-target="#caro" data-bs-slide-to="4"></button>
		</div>
		<div className="carousel-inner">
			<div className="carousel-item active">
				<img id="image" className="d-block" src={mobile}/>
				<div className="carousel-caption d-block" id="cap1">
					<h3>Rs.16,999</h3>
					<p>No Cost EMI</p>
					<h5>Upto <strong>Rs.14,999</strong> Off on Exchange</h5>
				</div>
			</div>
			<div className="carousel-item">
				<img id="image" className="d-block" src={furniture} alt="Second slide"/>
				<div className="carousel-caption d-block" id="cap2">
					<h3>#StlyeMyHome</h3>
					<h5>Upto <strong>7%</strong> Off on Best Brands</h5>
					<p>Use Coupon:<strong>HOME7</strong></p>
				</div>
			</div>
			<div className="carousel-item">
				<img id="image" className="d-block" src={fashion} alt="Third slide"/>
				<div className="carousel-caption d-block" id="cap3">
					<h3>#MeraApnaSwag</h3>
					<h5>Upto <strong>80%</strong> Off on Latest Fahion</h5>
				</div>
			</div>
			<div className="carousel-item">
				<img id="image" className="d-block" src={flight} alt="Fourth slide"/>
				<div className="carousel-caption d-block">
					<h3>Sale on Flight Bookings</h3>
					<h5>Use Code:NEW12</h5>
					<p>Get 12% Off on your first flight booking</p>
				</div>
			</div>
			<div className="carousel-item">
				<img id="image" className="d-block" src={health} alt="Fifth slide"/>
				<div className="carousel-caption d-block" id="cap4">
					<h3>#UniteToFightCorona</h3>
					<h5>#StayHomeStaySafe</h5>
					<p>Bulid your immunity with our Healthcare Essentials</p>
				</div>
			</div>
		</div>
  		<a className="carousel-control-prev" data-bs-target="#caro" role="button" data-bs-slide="prev">
    		<span className="carousel-control-prev-icon"></span>
  		</a>
  		<a className="carousel-control-next" data-bs-target="#caro" role="button" data-bs-slide="next">
   			<span className="carousel-control-next-icon"></span>
  		</a>
	</div>
	<Cards mch={'Furniture Bestsellers'} i1={swing} i2={bksf} i3={beanbag} i4={sfbd} ct1={'Swings'} ct2={'Bookshelves'} ct3={'Bean Bags'} ct4={'Sofa Beds'} p1={10000} p2={7500} p3={4000} p4={30000}/>
	<Cards mch={'Best of Electronics'} i1={tab} i2={wbcm} i3={lpsn} i4={trmr} ct1={'Lenovo Yoga Tab 3 Plus'} ct2={'Logitech C270 HD Webcam'} ct3={'Laptop Skin'} ct4={'Limited Edition Trimmer'} p1={22000} p2={2050} p3={329} p4={3000}/>
	<Cards mch={'Trending Fashion'} i1={shoes} i2={watch} i3={tees} i4={shades} ct1={'Skechers Burst'} ct2={'Casio Edifice'} ct3={'Designer TShirt'} ct4={'RayBan Shades'} p1={10000} p2={7799} p3={1799} p4={3499}/>
	<Cards mch={'Healthcare Essentials'} i1={mask} i2={puloxi} i3={vapo} i4={mulvit} ct1={'N-95 Masks(Pack of 4)'} ct2={'Pulse Oximeter'} ct3={'Vaporizer'} ct4={'Nutrilite Daily(120N)'} p1={100} p2={1499} p3={800} p4={1669}/>
	<Box className="mt-5">
		<BottomNavigation id="bn">
			<BottomNavigationAction id="icon1" icon={<StoreIcon/>}/>
			<BottomNavigationAction icon={<OfflineBoltIcon/>}/>
			<BottomNavigationAction icon={<AppsIcon/>}/>
			<BottomNavigationAction icon={<VideoLibraryIcon/>}/>
			<BottomNavigationAction icon={<SportsEsportsIcon/>}/>
		</BottomNavigation>
	</Box>
  </div>
  ,
  document.getElementById('root')
);