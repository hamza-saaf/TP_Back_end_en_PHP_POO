<?php
	
Interface ReservableInterface{
	public function reserver(Client $client, DateTime $dateDebut, int $nbJours): Reservation;
}
Class abstraite Vehicule{
  protected $id;
  protected $immatriculation;
  protected $marque;
  protected $modele;
  protected $prixJour;
  protected $disponible;
  
 public function afficherDetails(){
  
    echo "type: " . $this->getType();
    echo "id: " . $this->id;
    echo "immatriculation: " . $this->immatriculation;
    echo "marque: " . $this->marque;
    echo "modele: " . $this->modele;
    echo "prixjour: " . $this->prixJour;
    echo "disponible: " . ($this->estDisponible();
 }


  public function calculerPrix(int $jours): float{
    return $this->prixJour * $jours;
  }


  public function estDisponible(): bool{
      return $this->disponible;
  }


  abstract public function getType(): string;

  
}
class Voiture implements ReservableInterface {
    private  $nbPortes;
    private $transmission;
    public function __construct ($nbPortes,$transmission){
      
    }
    public function reserver(Client $client, DateTime $dateDebut, int $nbJours){
      
    }
}
class Moto implements ReservableInterface {
    private  $cylindree;
    
    public function reserver(Client $client, DateTime $dateDebut, int $nbJours){
      
    }
}
class Camion implements ReservableInterface {
    private  $capaciteTonnage;
    
    public function reserver(Client $client, DateTime $dateDebut, int $nbJours){
      
    }
}
