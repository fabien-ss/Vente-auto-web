import React, { useState, useEffect, useCallback } from "react";

import { API_URL } from "../../constante/constante";
import { sendGetRequest } from "../../fonction/fonction";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import { Bar } from 'react-chartjs-2';

import { CategoryScale, Chart, LinearScale, BarElement, ArcElement } from "chart.js";
import Loading from "../../assets/loading.gif";

Chart.register(LinearScale);
Chart.register(CategoryScale);
Chart.register(BarElement);
Chart.register(ArcElement);


function Statistique() {
  const [nombreAnnonceParAnnee, setNombreAnnonceParAnnee] = useState();
  const [marqueVenduParAnnnee, setMarqueVenduParAnnnee] = useState();
  const [modeleVenduParAnnnee, setModeleVenduParAnnnee] = useState();
  const [annee, setAnnee] = useState(new Date().getFullYear());
  const [anneeMarque, setAnneeMarque] = useState(new Date().getFullYear());
  const [anneeModele, setAnneeModele] = useState(new Date().getFullYear());

  const [isLoading, setIsLoading] = useState(false);
  const update = useCallback(async () => {
    setIsLoading(true);
    if ((annee === "") | (annee === null) | (annee.length === 0))
      setAnnee(new Date().getFullYear());
    if (
      (anneeMarque === "") |
      (anneeMarque === null) |
      (anneeMarque.length === 0)
    )
      setAnneeMarque(new Date().getFullYear());
    if (
      (anneeModele === "") |
      (anneeMarque === null) |
      (anneeModele.length === 0)
    )
      setAnneeModele(new Date().getFullYear());
    console.log("annee ", annee);
    const url1 = API_URL + "/statistiques/" + annee;
    const url2 = API_URL + "/statistiques/" + anneeMarque + "/marque";
    const url3 = API_URL + "/statistiques/" + anneeModele + "/modele";
    console.log(url1);
    const data = await sendGetRequest(url1, {}, "GET");
    const data2 = await sendGetRequest(url2, {}, "GET");
    const data3 = await sendGetRequest(url3, {}, "GET");
    setNombreAnnonceParAnnee(data.data.stat);
    setMarqueVenduParAnnnee(data2.data.stat);
    setModeleVenduParAnnnee(data3.data.stat);
    setIsLoading(false);
  }, [annee, anneeMarque, anneeModele]); // Add all dependencies here

  useEffect(() => {
    update();
  }, [update]);

  return (
    <div className="container py-4">
      <div className="row mb-3">
        <div className="col-12">
          
          <h5 className="mb-3">Annonce reçus en {annee}</h5>
          <div style={{display: "inline-block", padding: "5%"}}>

            <input
              type="number"
              name="annee"
              onChange={(e) => {
                setAnnee(e.target.value);
              }}
              onKeyUp={(e) =>{
                update();}
              }
            ></input>
              {isLoading && <img width="70px" height="50px" src={Loading} alt="loading ..."/>}
            </div>
          <Bar
            data={{
              labels: nombreAnnonceParAnnee?.map((element) => element.nom),
              datasets: [
                {
                  label: "Annonce reçus en " + annee,
                  data: nombreAnnonceParAnnee?.map((element) => element.nombre),
                  backgroundColor: "rgba(75,192,192,0.6)",
                },
              ],
            }}
            options={{
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12">
          <h5 className="mb-3">Marques les plus vendues en {anneeMarque}</h5>
          <input
            type="number"
            onChange={(e) => setAnneeMarque(e.target.value)}
            onKeyUp={(e) =>{
              update();}
            }
          ></input>
          <Bar
            data={{
              labels: marqueVenduParAnnnee?.map((element) => element.marqueNom),
              datasets: [
                {
                  label: "Marque reçus en " + annee,
                  data: marqueVenduParAnnnee?.map((element) => element.nombre),
                  backgroundColor: "rgba(75,192,192,0.6)",
                },
              ],
            }}
            options={{
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12">
          <h5 className="mb-3">Modeles les plus vendues en {anneeModele}</h5>
          <input
            type="number"
            onChange={(e) => setAnneeModele(e.target.value)}
            onKeyUp={(e) =>{
              update();}
            }
          ></input>
          <div className="horizontal-bar-chart">
        <Bar
            data={{
                labels: modeleVenduParAnnnee?.map((element) => element.modeleNom),
                datasets: [
                    {
                        label: "Modele reçus en " + annee,
                        data: modeleVenduParAnnnee?.map((element) => element.nombre),
                        backgroundColor: "rgba(75,192,192,0.6)",
                    },
                ],
            }}
            options={{
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Horizontal Bar Chart'
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true
                    },
                    y: {
                        beginAtZero: true
                    }
                }
                }}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistique;
