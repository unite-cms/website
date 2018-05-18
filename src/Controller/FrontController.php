<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class FrontController extends Controller
{

    /**
     * @Route("/", name="front", options={"sitemap" = true})
     * @Template("front/index.html.twig")
     */
    public function front()
    {
    }

    /**
     * @Route("/about", name="about", options={"sitemap" = true})
     * @Template("about/index.html.twig")
     */
    public function about()
    {
    }

    /**
     * @Route("/docs", name="docs", options={"sitemap" = true})
     * @Template("docs/index.html.twig")
     */
    public function docs()
    {
        $topics = [
          [
            'menu' => 'Getting started',
            'headline' => 'Getting started with unite cms',
            'slug' => 'getting-started',
            'intro' => '<p>Getting started with unite cms, 
install unite cms using composer and basic configuration.</p>',
            'articles' => [
              [
                'menu' => 'Introduction',
                'headline' => 'A short introduction',
                'slug' => 'intro',
                'content' => '<p>unite cms is a decoupled content management 
system that allows you to manage all kind of content in one application. You can 
login into unite cms and configure any kind of data / user / settings types. 
Via the admin interface you and your content editors can manage content 
according to the defined types. unite cms does not provide any frontend 
rendering layer, so the only way to access the content is via a GraphQL API.</p>
<p>The big idea behind unite cms is to have a single system just for content 
management. All other features that are part of many state-of-the-art CMS but 
have nothing to do with content management (search server, image processing, template rendering etc.) 
are not part of unite cms and we are not planing to implement them in the future. Because of 
this, unite cms is designed to be integrated with other services.</p>
<p>One example would be to have a small website application, written in Symfony, 
that fetches content from unite cms and uses imgix.com for resizing images, 
that are stored in a S3 storage.</p>
<p class="alert info"><i data-feather="info"></i> By focusing on content management only, we can put all our 
effort in the content management architecture and the content editor experience. 
Still, our SasS platform offers all features you would expect from a state-of-the-art CMS by integrating 3rd party open source services like minio.io.</p>'
              ],
              [
                'menu' => 'On Premises Installation',
                'headline' => 'On Premises Installation',
                'slug' => 'on-premises-installation',
                'content' => '
<p>Once our SaaS service (unitecms.io) is ready (summer 2018), 
you can run unite cms in our cloud, hosted in Vienna (Austria). Since the 
application is published under an open source license, you can always run it on your own infrastructure. unite cms is based on Symfony 4 and 
vue.js, the only server dependencies are <strong>PHP 7.1</strong> and <strong>MySQL 5.7.9</strong></p>
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
          [
            'menu' => 'Basic concepts',
            'headline' => 'Basic concepts',
            'slug' => 'basic-concepts',
            'intro' => '<p>Learn the basic architecture of unite cms and see how you can define your schema types.</p>',
            'articles' => [
              [
                'menu' => 'Organizations',
                'headline' => 'Organizations',
                'slug' => 'organizations',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
              [
                'menu' => 'Domains',
                'headline' => 'Domains',
                'slug' => 'domains',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
              [
                'menu' => 'Content Types',
                'headline' => 'Content Types',
                'slug' => 'content-types',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
              [
                'menu' => 'Setting Types',
                'headline' => 'Setting Types',
                'slug' => 'setting-types',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
              [
                'menu' => 'Member Types',
                'headline' => 'Member Types',
                'slug' => 'member-types',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
            ],
          ],
          [
            'menu' => 'Fields',
            'headline' => 'Fields',
            'slug' => 'fields',
            'intro' => '<p>A reference of all fields that can be used for one of the fieldable types.</p>',
            'articles' => [
              [
                'menu' => 'Checkbox',
                'headline' => 'Checkbox',
                'slug' => 'checkbox',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
              [
                'menu' => 'Choice',
                'headline' => 'Choice',
                'slug' => 'choice',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
              [
                'menu' => 'Date',
                'headline' => 'Date',
                'slug' => 'date',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
              [
                'menu' => 'DateTime',
                'headline' => 'DateTime',
                'slug' => 'datetime',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
              [
                'menu' => 'Email',
                'headline' => 'Email',
                'slug' => 'email',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
              [
                'menu' => 'Integer',
                'headline' => 'Integer',
                'slug' => 'integer',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
              [
                'menu' => 'Number',
                'headline' => 'Number',
                'slug' => 'number',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
              [
                'menu' => 'Phone',
                'headline' => 'Phone',
                'slug' => 'phone',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
              [
                'menu' => 'Range',
                'headline' => 'Range',
                'slug' => 'range',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
              [
                'menu' => 'Reference',
                'headline' => 'Reference',
                'slug' => 'reference',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
              [
                'menu' => 'SortIndex',
                'headline' => 'SortIndex',
                'slug' => 'sort-index',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
              [
                'menu' => 'TextArea',
                'headline' => 'TextArea',
                'slug' => 'text-area',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
              [
                'menu' => 'Text',
                'headline' => 'Text',
                'slug' => 'text',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
              [
                'menu' => 'Collection',
                'headline' => 'Collection',
                'slug' => 'collection',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
              [
                'menu' => 'File',
                'headline' => 'File',
                'slug' => 'file',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
              [
                'menu' => 'Image',
                'headline' => 'Image',
                'slug' => 'image',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
              [
                'menu' => 'WYSIWYG Editor',
                'headline' => 'WYSIWYG Editor',
                'slug' => 'wysiwyg',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
            ]
          ],
          [
            'menu' => 'Views',
            'headline' => 'Views',
            'slug' => 'views',
            'intro' => '<p>For each Content Type you can define one or multiple 
views, that define the management view of content. The default view is a table, 
that just displays field columns and action buttons for each content row. 
Another example would be a drag and drop sort view, that allows the user to 
sort content directly in the view. At the moment there are just two basic 
views available, however are planing to implement many different views (Media gallery, Kanban board, etc.) in the future!</p>',
            'articles' => [
              [
                'menu' => 'Table',
                'headline' => 'Table',
                'slug' => 'table',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
              [
                'menu' => 'Sortable',
                'headline' => 'Sortable',
                'slug' => 'sortable',
                'content' => '<p class="alert error"><i data-feather="alert-triangle"></i> Docs will be ready soon!</p>',
              ],
            ],
          ],
        ];


        return [
          'topics' => $topics,
        ];
    }

    /**
     * @Route("/imprint", name="imprint", options={"sitemap" = true})
     * @Template("imprint/index.html.twig")
     */
    public function imprint()
    {
    }
}
