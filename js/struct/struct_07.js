window.struct_07 = {
	ver: 7,
	editorVer: "07",
	main: [
		"unknown_head", "int16",
		"sht_off_cnt", "int16",
		"bomb_per_life", "float", // why is this a float? only ZUN knows
		"deathbomb_wnd", "int32",
		"hitbox", "float",
		"grazebox", "float",
		"item_magnet_spd", "float",
		"itembox", "float",
		"death_cherry_loss", "float",
		"poc_line", "float", // distance of PoC from the top of the screen
		"move_nf_str", "float",
		"move_f_str", "float",
		"move_nf_dia", "float",
		"move_f_dia", "float",
		"sht_off", "sht_off",
		"sht_arr", "sht_arr"
	],
	sht_off: [
		"offset", "uint32",
		"power", "uint32"
	],
	sht_arr: [
		"fire_rate", "int16",
		"start_delay", "int16",
		"off_x", "float",
		"off_y", "float",
		"hitbox_x", "float",
		"hitbox_y", "float",
		"angle", "float",
		"speed", "float",
		"dmg", "int16",
		"option", "byte",
		"unknown_old_sht_1", "byte",
		"anm", "int16",
		"sfx_id", "int16",
		"flags", "flags"
	],
	sht_off_type: "abs",
	option_pos_len: false, // they don't exist here
	max_opt: false, // ^
	flags_len: 0x10,
	flag_size: 2,
	type: "maingame",
	forced_shtoffarr_len: false,
	f_uf_shooter_split: false
};
