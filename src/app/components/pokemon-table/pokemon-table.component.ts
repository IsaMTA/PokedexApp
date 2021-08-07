import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss']
})
export class PokemonTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'img', 'name']; //Columnas a desplegarse
  data: any[] = []; //Almacén de datos
  dataSource = new MatTableDataSource<any>(this.data); //Info a desplegarse
  pokemons = []; //Listado de pokémones

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(private pkService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  //Función que obtiene la información de los pokémones
  getPokemons(){
    let pokemonInfo; //Obtiene ciertos apartados de información de un sólo pokémon
    for(let i=1; i <= 100; i++){ //Se obtiene la información de los primeros 100 pokémones
      this.pkService.getPokemons(i).subscribe( //Usando el servicio para consumir la API  
        res =>{
          pokemonInfo = {
            id: i,
            img: res.sprites.front_default,
            name: res.name
          };
          this.data.push(pokemonInfo); //Almacena los datos obtenidos
          this.dataSource = new MatTableDataSource<any>(this.data); //Actualiza dataSource
          this.dataSource.paginator = this.paginator;
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  //Función por default para Paginator
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //Función para navegar hacia los detalles del pokémon elegido
  getRow(row: any){
    this.router.navigateByUrl(`pkDetail/${row.id}`);
  }

}
