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
    public function front()
    {
    }

    /**
     * @Route("/about", name="about")
     * @Template("about/index.html.twig")
     */
    public function about()
    {
    }

    /**
     * @Route("/docs", name="docs")
     * @Template("docs/index.html.twig")
     */
    public function docs()
    {
        $topics = [
          [
            'menu' => 'Getting started',
            'headline' => 'Getting started with unite cms',
            'slug' => 'getting-started',
            'intro' => '<p>Getting started with unite <strong>cms</strong>, 
install unite cms using composer and basic configuration.</p>',
            'articles' => [
              [
                'menu' => 'Intro',
                'headline' => 'A short introduction',
                'slug' => 'intro',
                'content' => '<p>unite cms is a decoupled content management 
system that allows you to manage all kind of content one application. You can 
login into unite cms and configure any kind of data / user / settings types. 
Via the admin interface you and your content editors can manage content 
according to the defined types. unite cms does not provide any frontend 
rendering layer, so the only way to access the content is via a GraphQL API.</p>'
              ],
              [
                'menu' => 'System Requirements',
                'headline' => 'System Requirements',
                'slug' => 'requirements',
                'content' => '<p>unite cms is based on Symfony 4, Doctrine and 
vue.js and only needs <strong>PHP 7.1</strong>,  
<strong>MySQL 5.7.9</strong> and a modern browser to run.</p>'
              ],
            ],
          ],
        ];


        return [
          'topics' => $topics,
        ];
    }

    /**
     * @Route("/imprint", name="imprint")
     * @Template("imprint/index.html.twig")
     */
    public function imprint()
    {
    }
}
