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
                'content' => '<p>Once our SaaS service (unitecms.io) is ready (summer 2018), 
you can run unite cms in our cloud, hosted in Vienna (Austria). Since the 
application is published under an open source license, you can always run it on your server. unite cms is based on Symfony 4 and 
vue.js, the only server dependencies are <strong>PHP 7.1</strong> and <strong>MySQL 5.7.9</strong></p>'
              ],
              [
                'menu' => 'On Premises Installation',
                'headline' => 'On Premises Installation',
                'slug' => 'on-premises-installation',
                'content' => '
<h5>Installation for development</h5>
<pre><code class="bash">composer create-project unite-cms/standard unitecms --stability dev
cd unitecms
bin/console doctrine:schema:update --force

# run the development server
bin/console serve:run</code></pre>
<p>On composer install (and update) you will be asked to set all required 
environment (dotenv) variables.</p>

<h5>Installation for production</h5>
<pre><code class="bash">composer create-project unite-cms/standard unitecms --stability dev --no-dev --no-scripts
cd unitecms

bin/console assets:install --env=prod
bin/console doctrine:schema:update --force --env=prod
bin/console cache:clear --env=prod</code></pre>
<p>In order to run unite cms, all required settings must be available as 
environment variables. It is recommended to <a href="https://symfony.com/doc/current/configuration/external_parameters.html#configuring-environment-variables-in-production" target="_blank">set this variables at a web server level</a>.</p>
<p>After unite cms was successfully installed you can create a <em>Platform Administrator</em> and your first organization.</p>
<pre><code class="bash">bin/console unite:user:create
bin/console unite:organization:create</code></pre>
<p>Now you can login into unite cms and start using the cms.</p>
'
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
