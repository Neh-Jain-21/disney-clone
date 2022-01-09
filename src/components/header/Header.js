/** @format */

import React, { useState } from "react";
import {
	AppBar,
	Toolbar,
	IconButton,
	Button,
	Input,
	InputAdornment,
	MenuItem,
	Menu,
	ListItemIcon,
} from "@material-ui/core";
//icons
import logo from "../../imgs/disney_logo.svg";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import TableChartOutlinedIcon from "@material-ui/icons/TableChartOutlined";
import TranslateOutlinedIcon from "@material-ui/icons/TranslateOutlined";
import NotesOutlinedIcon from "@material-ui/icons/NotesOutlined";
//css
import useStyles from "./Styles";

const Header = () => {
	const classes = useStyles();

	const [anchorElmenu, setAnchorElmenu] = useState(null);
	const [anchorEltv, setAnchorEltv] = useState(null);
	const [anchorElmovie, setAnchorElmovie] = useState(null);
	const [anchorElsport, setAnchorElsport] = useState(null);

	const handleClickmenu = (event) => {
		setAnchorElmenu(event.currentTarget);
	};

	const handleClicktv = (event) => {
		setAnchorEltv(event.currentTarget);
	};

	const handleClickmovie = (event) => {
		setAnchorElmovie(event.currentTarget);
	};

	const handleClicksport = (event) => {
		setAnchorElsport(event.currentTarget);
	};

	const handleClosemenu = () => {
		setAnchorElmenu(null);
	};

	const handleClosetv = () => {
		setAnchorEltv(null);
	};

	const handleClosemovie = () => {
		setAnchorElmovie(null);
	};

	const handleClosesport = () => {
		setAnchorElsport(null);
	};

	return (
		<>
			<AppBar className={classes.root} position="sticky">
				<Toolbar>
					{/* leftside */}
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						onClick={handleClickmenu}
						aria-controls="menu-menu"
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-menu"
						getContentAnchorEl={null}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "center",
						}}
						transformOrigin={{
							vertical: "top",
							horizontal: "center",
						}}
						keepMounted
						anchorEl={anchorElmenu}
						open={Boolean(anchorElmenu)}
						onClose={handleClosemenu}
					>
						<MenuItem className={classes.menu} onClick={handleClosemenu}>
							<ListItemIcon>
								<TableChartOutlinedIcon className={classes.menuIcon} fontSize="small" />
							</ListItemIcon>
							Channels
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosemenu}>
							<ListItemIcon>
								<TranslateOutlinedIcon fontSize="small" className={classes.menuIcon} />
							</ListItemIcon>
							Languages
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosemenu}>
							<ListItemIcon>
								<NotesOutlinedIcon fontSize="small" className={classes.menuIcon} />
							</ListItemIcon>
							Genres
						</MenuItem>
					</Menu>

					<img className={classes.title} src={logo} alt="" />

					<Button
						aria-controls="simple-menu"
						aria-haspopup="true"
						onClick={handleClicktv}
						className={classes.linktv}
					>
						TV
					</Button>
					<Menu
						id="tv-menu"
						getContentAnchorEl={null}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "center",
						}}
						transformOrigin={{
							vertical: "top",
							horizontal: "center",
						}}
						keepMounted
						anchorEl={anchorEltv}
						open={Boolean(anchorEltv)}
						onClose={handleClosetv}
					>
						<MenuItem className={classes.menu} onClick={handleClosetv}>
							Hotstar Specials
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosetv}>
							Quix
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosetv}>
							Star Jalsha
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosetv}>
							StarPlus
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosetv}>
							Star Vijay
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosetv}>
							Star Bharat
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosetv}>
							Asianet
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosetv}>
							Star Maa
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosetv}>
							more...
						</MenuItem>
					</Menu>

					<Button
						aria-controls="movie-menu"
						aria-haspopup="true"
						onClick={handleClickmovie}
						className={classes.links}
					>
						Movies
					</Button>
					<Menu
						id="movie-menu"
						getContentAnchorEl={null}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "center",
						}}
						transformOrigin={{
							vertical: "top",
							horizontal: "center",
						}}
						keepMounted
						anchorEl={anchorElmovie}
						open={Boolean(anchorElmovie)}
						onClose={handleClosemovie}
					>
						<MenuItem className={classes.menu} onClick={handleClosemovie}>
							Hindi
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosemovie}>
							Bengali
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosemovie}>
							Telugu
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosemovie}>
							Malyalam
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosemovie}>
							Tamil
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosemovie}>
							Marathi
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosemovie}>
							English
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosemovie}>
							Kannada
						</MenuItem>
					</Menu>

					<Button
						aria-controls="sport-menu"
						aria-haspopup="true"
						onClick={handleClicksport}
						className={classes.links}
					>
						Sports
					</Button>
					<Menu
						id="sport-menu"
						getContentAnchorEl={null}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "center",
						}}
						transformOrigin={{
							vertical: "top",
							horizontal: "center",
						}}
						keepMounted
						anchorEl={anchorElsport}
						open={Boolean(anchorElsport)}
						onClose={handleClosesport}
					>
						<MenuItem className={classes.menu} onClick={handleClosesport}>
							Cricket
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosesport}>
							Tenis
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosesport}>
							Formula 1
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosesport}>
							Football
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosesport}>
							Badminton
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosesport}>
							eSports
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosesport}>
							Martial Arts
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosesport}>
							Hockey
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosesport}>
							Golf
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosesport}>
							Wrestling
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosesport}>
							Kabaddi
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosesport}>
							Table Tennis
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosesport}>
							Khelo India
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosesport}>
							Athletics
						</MenuItem>
						<MenuItem className={classes.menu} onClick={handleClosesport}>
							Formula E
						</MenuItem>
					</Menu>

					<Button className={classes.links}>Disney+</Button>
					<Button size="large" className={classes.kids}></Button>

					{/* rightside */}
					<div className={classes.right}>
						<Input
							className={classes.inputRoot}
							placeholder="Search"
							endAdornment={
								<InputAdornment position="end">
									<SearchIcon fontSize="small" />
								</InputAdornment>
							}
						/>
						<Button
							variant="contained"
							color="primary"
							size="small"
							className={classes.subscribe}
						>
							Subscribe
						</Button>
						<Button className={classes.login}>LOGIN</Button>
					</div>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Header;
