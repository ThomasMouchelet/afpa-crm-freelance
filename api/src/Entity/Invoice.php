<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\InvoiceRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: InvoiceRepository::class)]
#[ApiResource]
class Invoice
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups('read:customer:item')]
    private $id;

    #[ORM\Column(type: 'integer')]
    #[Groups('read:customer:item')]
    private $amount;

    #[ORM\Column(type: 'datetime')]
    #[Groups('read:customer:item')]
    private $sendingAt;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups('read:customer:item')]
    private $status;

    #[ORM\ManyToOne(targetEntity: Customer::class, inversedBy: 'invoices')]
    private $customer;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAmount(): ?int
    {
        return $this->amount;
    }

    public function setAmount(int $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    public function getSendingAt(): ?\DateTimeInterface
    {
        return $this->sendingAt;
    }

    public function setSendingAt(\DateTimeInterface $sendingAt): self
    {
        $this->sendingAt = $sendingAt;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getCustomer(): ?Customer
    {
        return $this->customer;
    }

    public function setCustomer(?Customer $customer): self
    {
        $this->customer = $customer;

        return $this;
    }
}
