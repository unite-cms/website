<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class FrontController extends Controller
{
    /**
     * @Route("/", name="front")
     * @Template("front/index.html.twig")
     */
    public function front() {}

    /**
     * @Route("/about", name="about")
     * @Template("about/index.html.twig")
     */
    public function about() {}
}
