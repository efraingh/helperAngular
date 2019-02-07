import { Component, OnInit } from '@angular/core';

import { DualListComponent } from 'angular-dual-listbox';

declare var jQuery: any;
declare var $: any;

@Component({
	selector: 'app-listbox-select',
	templateUrl: './listbox-select.component.html',
	styleUrls: ['./listbox-select.component.css']
})
export class ListboxSelectComponent implements OnInit {

	tab = 1;
	keepSorted = true;
	key: string;
	display: any;
	filter = false;
	source: Array<any>;
	confirmed: Array<any>;
	userAdd = '';
	disabled = false;

	sourceLeft = true;
	//format:any = DualListComponent.DEFAULT_FORMAT;
	format = {
		add: 'Adicionar', remove: 'Remover', all: 'Todos', none: 'Ninguno',
		direction: DualListComponent.LTR, draggable: true, locale: 'es'
	};
	private sourceTube: Array<string>;
	private sourceStations: Array<any>;
	private sourceChessmen: Array<any>;

	private confirmedTube: Array<string>;
	private confirmedStations: Array<any>;
	private confirmedChessmen: Array<any>;

	arrayType = [
		{ name: 'Rio Grande', detail: '(object array)', value: 'station' },
		{ name: 'Chessmen', detail: '(object array)', value: 'chess' },
		{ name: 'Underground', detail: '(string array)', value: 'tube' }
	];

	type = this.arrayType[0].value;

	private stations: Array<any> = [
		{ key: 1, station: 'Antonito', state: 'CO' },
		{ key: 2, station: 'Big Horn', state: 'NM' },
		{ key: 3, station: 'Sublette', state: 'NM' },
		{ key: 4, station: 'Toltec', state: 'NM' },
		{ key: 5, station: 'Osier', state: 'CO' },
		{ key: 6, station: 'Chama', state: 'NM' },
		{ key: 7, station: 'Monero', state: 'NM' },
		{ key: 8, station: 'Lumberton', state: 'NM' },
		{ key: 9, station: 'Duice', state: 'NM' },
		{ key: 10, station: 'Navajo', state: 'NM' },
		{ key: 11, station: 'Juanita', state: 'CO' },
		{ key: 12, station: 'Pagosa Jct', state: 'CO' },
		{ key: 13, station: 'Carracha', state: 'CO' },
		{ key: 14, station: 'Arboles', state: 'CO' },
		{ key: 15, station: 'Solidad', state: 'CO' },
		{ key: 16, station: 'Tiffany', state: 'CO' },
		{ key: 17, station: 'La Boca', state: 'CO' },
		{ key: 18, station: 'Ignacio', state: 'CO' },
		{ key: 19, station: 'Oxford', state: 'CO' },
		{ key: 20, station: 'Florida', state: 'CO' },
		{ key: 21, station: 'Bocea', state: 'CO' },
		{ key: 22, station: 'Carbon Jct', state: 'CO' },
		{ key: 23, station: 'Durango', state: 'CO' },
		{ key: 24, station: 'Home Ranch', state: 'CO' },
		{ key: 25, station: 'Trimble Springs', state: 'CO' },
		{ key: 26, station: 'Hermosa', state: 'CO' },
		{ key: 27, station: 'Rockwood', state: 'CO' },
		{ key: 28, station: 'Tacoma', state: 'CO' },
		{ key: 29, station: 'Needleton', state: 'CO' },
		{ key: 30, station: 'Elk Park', state: 'CO' },
		{ key: 31, station: 'Silverton', state: 'CO' },
		{ key: 32, station: 'Eureka', state: 'CO' }
	];

	private chessmen: Array<any> = [
		{ _id: 1, name: 'Pawn' },
		{ _id: 2, name: 'Rook' },
		{ _id: 3, name: 'Knight' },
		{ _id: 4, name: 'Bishop' },
		{ _id: 5, name: 'Queen' },
		{ _id: 6, name: 'King' }
	];

	private tube: Array<string> = [
		'Harrow & Wealdstone',
		'Kenton',
		'South Kenton',
		'North Wembley',
		'Wembley Central',
		'Stonebridge Park',
		'Harlesden',
		'Willesden Junction',
		'Kensal Green',
		"Queen's Park",
		'Kilburn Park',
		'Maida Vale',
		'Warwick Avenue',
		'Paddington',
		'Edgware Road',
		'Marylebone',
		'Baker Street',
		"Regent's Park",
		'Oxford Circus',
		'Piccadilly Circus',
		'Charing Cross',
		'Embankment',
		'Waterloo',
		'Lambeth North',
		'Elephant & Castle'
	];

	constructor() { }

	ngOnInit() {
		this.doReset();
	}


	private stationLabel(item: any) {
		return item.station + ', ' + item.state;
	}

	private useStations() {
		this.key = 'key';
		this.display = this.stationLabel;
		this.keepSorted = true;
		this.source = this.sourceStations;
		this.confirmed = this.confirmedStations;
	}

	private useChessmen() {
		this.key = '_id';
		this.display = 'name';
		this.keepSorted = false;
		this.source = this.sourceChessmen;
		this.confirmed = this.confirmedChessmen;
	}

	private useTube() {
		this.key = undefined;
		this.display = undefined;
		this.keepSorted = false;
		this.source = this.sourceTube;
		this.confirmed = this.confirmedTube;
	}

	swapSource() {
		switch (this.type) {
			case this.arrayType[0].value:
				this.useStations();
				break;
			case this.arrayType[1].value:
				this.useChessmen();
				break;
			case this.arrayType[2].value:
				this.useTube();
				break;
		}
	}

	doReset() {
		this.sourceChessmen = JSON.parse(JSON.stringify(this.chessmen));
		this.sourceStations = JSON.parse(JSON.stringify(this.stations));
		this.sourceTube = JSON.parse(JSON.stringify(this.tube));
		this.confirmedChessmen = new Array<any>();
		this.confirmedStations = new Array<any>();
		this.confirmedTube = new Array<string>();

		// Preconfirm some items.
		this.confirmedStations.push(this.stations[31], this.stations[25]);
		this.confirmedTube.push(this.tube[13]);
		this.confirmedTube.push(this.tube[23]);

		switch (this.type) {
			case this.arrayType[0].value:
				this.useStations();
				break;
			case this.arrayType[1].value:
				this.useChessmen();
				break;
			case this.arrayType[2].value:
				this.useTube();
				break;
		}
	}

	doDelete() {
		if (this.source.length > 0) {
			this.source.splice(0, 1);
		}
	}

	doCreate() {
		if (typeof this.source[0] === 'object') {
			const o = {};
			o[this.key] = this.source.length + 1;
			o[this.display] = this.userAdd;
			this.source.push(o);
		} else {
			this.source.push(this.userAdd);
		}
		this.userAdd = '';
	}

	doAdd() {
		for (let i = 0, len = this.source.length; i < len; i += 1) {
			const o = this.source[i];
			const found = this.confirmed.find((e: any) => e === o);
			if (!found) {
				this.confirmed.push(o);
				break;
			}
		}
	}

	doRemove() {
		if (this.confirmed.length > 0) {
			this.confirmed.splice(0, 1);
		}
	}

	doFilter() {
		this.filter = !this.filter;
	}

	filterBtn() {
		return (this.filter ? 'Hide Filter' : 'Show Filter');
	}

	doDisable() {
		this.disabled = !this.disabled;
	}

	disableBtn() {
		return (this.disabled ? 'Enable' : 'Disabled');
	}

	swapDirection() {
		this.sourceLeft = !this.sourceLeft;
		this.format.direction = this.sourceLeft ? DualListComponent.LTR : DualListComponent.RTL;
	}
}
