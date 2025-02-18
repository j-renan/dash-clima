import { Component, inject, OnInit } from '@angular/core';
import { ClimaService } from '../services/clima.service';
import { catchError, finalize, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import e from 'express';
import { LoadingComponent } from '../loading/loading.component';
import { NotificationService } from '../services/notification.service';

@Component({
    selector: 'app-home',
    imports: [CommonModule, FormsModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
    loading: boolean = false
    dadosClima: Clima | undefined
    cityName: string = '';

    climaService = inject(ClimaService)
    private nsService = inject(NotificationService)

    ngOnInit(): void {
    }

    getClimaByCity(city: string) {
        this.loading = true
        this.climaService.getDadosClima(city)
            .pipe(
                map((response: any) => {
                    return {
                        cidade: response.cidade,
                        data: response.data,
                        hora: response.hora,
                        icon: response.icon,
                        precipitacao: response.precipitacao ? response.precipitacao.toFixed(0) : 0,
                        temperatura: response.temperatura ? response.temperatura.toFixed(0) : 0,
                        umidade: response.umidade ? response.umidade.toFixed(0) : 0,
                        vento: response.vento ? response.vento.toFixed(0) : 0,
                        previsao: this.formatarPrevisao(response.previsao)
                    }
                }),
                finalize(() => this.loading = false))
            .subscribe({
                next: (response) => {
                    this.dadosClima = response
                    this.nsService.success('Dados do clima carregados com sucesso!')
                },
                error: (error) => {
                    this.nsService.error('Erro ao buscar dados do local informado!')
                }
            })
    }

    private formatarPrevisao(dados: Previsao[]): Previsao[] {
        let previsao: Previsao[] = []
        dados.forEach((dado: any) => {
            previsao.push({
                data: dado.data,
                icon: dado.icon,
                precipitacao: dado.precipitacao ? dado.precipitacao.toFixed(0) : '0',
                temperatura_max: dado.temperatura_max ? dado.temperatura_max.toFixed(0) : '0',
                temperatura_min: dado.temperatura_min ? dado.temperatura_min.toFixed(0) : '0',
                umidade: dado.umidade ? dado.umidade.toFixed(0) : '0',
                vento: dado.vento ? dado.vento.toFixed(0) : '0'
            })
        })

        return previsao

    }

}

export interface Clima {
    cidade: string
    data: string
    hora: string
    icon: string
    precipitacao: number
    temperatura: number
    umidade: number
    vento: number
    previsao: Previsao[]
}

export interface Previsao {
    data: string
    icon: string
    precipitacao: string
    temperatura_max: string
    temperatura_min: string
    umidade: string
    vento: string
}

