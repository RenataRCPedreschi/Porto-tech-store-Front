'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">porto-tech-store documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-6742d5ffc17261b29e22c3e4d51be8fe6368b8f8ef4ff1407131fe445754b1b5ef708adec2b296f3ff94a9ae322f76e8f80929705e3b444d82c674ae3fc31596"' : 'data-target="#xs-components-links-module-AppModule-6742d5ffc17261b29e22c3e4d51be8fe6368b8f8ef4ff1407131fe445754b1b5ef708adec2b296f3ff94a9ae322f76e8f80929705e3b444d82c674ae3fc31596"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6742d5ffc17261b29e22c3e4d51be8fe6368b8f8ef4ff1407131fe445754b1b5ef708adec2b296f3ff94a9ae322f76e8f80929705e3b444d82c674ae3fc31596"' :
                                            'id="xs-components-links-module-AppModule-6742d5ffc17261b29e22c3e4d51be8fe6368b8f8ef4ff1407131fe445754b1b5ef708adec2b296f3ff94a9ae322f76e8f80929705e3b444d82c674ae3fc31596"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BuscaCategoriaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BuscaCategoriaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BuscaMarcaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BuscaMarcaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BuscaNomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BuscaNomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CabecalhoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CabecalhoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CadastrarUsuarioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CadastrarUsuarioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CadastroProdutoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CadastroProdutoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarrinhoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarrinhoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditarProdutoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditarProdutoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditarUsuarioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditarUsuarioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FaleConoscoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaleConoscoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GerenciarProdutosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GerenciarProdutosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InicioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InicioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MeuspedidosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MeuspedidosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProdutoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProdutoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RodapeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RodapeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SobreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SobreComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ItemCarrinho.html" data-type="entity-link" >ItemCarrinho</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProdutoModel.html" data-type="entity-link" >ProdutoModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLogin.html" data-type="entity-link" >UserLogin</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserModel.html" data-type="entity-link" >UserModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/VendaModel.html" data-type="entity-link" >VendaModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProdutoService.html" data-type="entity-link" >ProdutoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VendaService.html" data-type="entity-link" >VendaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ViaCEPService.html" data-type="entity-link" >ViaCEPService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});