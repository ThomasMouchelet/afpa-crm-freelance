<?php

namespace App\DataFixtures;

use App\Entity\Customer;
use App\Entity\Invoice;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

const STATUS = [
    "SENT",
    "PAID",
    "CANCELLED"
];

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create();

        for ($i = 0; $i < 10; $i++) {
            $customer = new Customer();

            $customer
                ->setEmail($faker->companyEmail())
                ->setCompanyName($faker->company());

            for ($i = 0; $i < mt_rand(1, 10); $i++) {
                $invoice = new Invoice();

                $invoice
                    ->setAmount(mt_rand(900, 9000))
                    ->setSendingAt($faker->dateTimeBetween('-6 week', '+1 week'))
                    ->setStatus(STATUS[mt_rand(0, 2)])
                    ->setCustomer($customer);

                $manager->persist($invoice);
            }

            $manager->persist($customer);
        }

        $manager->flush();
    }
}
