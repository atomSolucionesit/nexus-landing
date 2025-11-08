"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Package,
  ShoppingCart,
  Truck,
  Globe,
  BarChart3,
  Users,
  Boxes,
  ArrowRightLeft,
  AlertTriangle,
  CreditCard,
  FileText,
  TrendingUp,
  ShoppingBag,
  PackageCheck,
  Store,
  Share2,
  LayoutDashboard,
  DollarSign,
  FileBarChart,
  UserPlus,
  ShieldCheck,
  FileSearch,
  X,
  ChevronRight,
  Monitor,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import modulesData from "@/utils/modules-data.json";

const iconMap = {
  package: Package,
  "shopping-cart": ShoppingCart,
  truck: Truck,
  globe: Globe,
  "bar-chart-3": BarChart3,
  users: Users,
  boxes: Boxes,
  "arrow-right-left": ArrowRightLeft,
  "alert-triangle": AlertTriangle,
  "credit-card": CreditCard,
  "file-text": FileText,
  "trending-up": TrendingUp,
  "shopping-bag": ShoppingBag,
  "package-check": PackageCheck,
  store: Store,
  "share-2": Share2,
  "layout-dashboard": LayoutDashboard,
  "dollar-sign": DollarSign,
  "file-bar-chart": FileBarChart,
  "user-plus": UserPlus,
  "shield-check": ShieldCheck,
  "file-search": FileSearch,
};

interface ModuleItem {
  id: string;
  label: string;
  icon: string;
  description: string;
  images: {
    desktop: string;
    mobile: string;
  };
}

interface Module {
  id: string;
  label: string;
  icon: string;
  description: string;
  images: {
    desktop: string;
    mobile: string;
  };
  items: ModuleItem[];
}

export function ModuleShowcase() {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [selectedItem, setSelectedItem] = useState<ModuleItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  const modules: Module[] = modulesData.modules;

  const getIcon = (iconName: string) => {
    return iconMap[iconName as keyof typeof iconMap] || Package;
  };

  const openShowcase = (module: Module) => {
    setSelectedModule(module);
    setSelectedItem(module.items[0] || null);
    setIsOpen(true);
  };

  const closeShowcase = () => {
    setIsOpen(false);
    setSelectedModule(null);
    setSelectedItem(null);
  };

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Explorá los módulos de Nexus
            </h2>
            <p className="text-xl text-gray-600">
              Descubrí cómo cada módulo puede transformar la gestión de tu
              negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {modules.map((module) => {
              const Icon = getIcon(module.icon);
              return (
                <Card
                  key={module.id}
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  onClick={() => openShowcase(module)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {module.label}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {module.items.length} funciones
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {module.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Ver módulo <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal Showcase */}
      {isOpen && selectedModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeShowcase}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-xl shadow-2xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b bg-gray-50">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  {(() => {
                    const Icon = getIcon(selectedModule.icon);
                    return <Icon className="h-5 w-5 text-blue-600" />;
                  })()}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {selectedModule.label}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {selectedModule.description}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={closeShowcase}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex h-[calc(90vh-120px)]">
              {/* Sidebar */}
              <div className="w-80 border-r bg-gray-50 overflow-y-auto">
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Funcionalidades
                  </h3>
                  <div className="space-y-2">
                    {selectedModule.items.map((item) => {
                      const ItemIcon = getIcon(item.icon);
                      return (
                        <button
                          key={item.id}
                          className={`w-full text-left p-3 rounded-lg transition-colors ${
                            selectedItem?.id === item.id
                              ? "bg-blue-100 border-blue-200 border"
                              : "hover:bg-gray-100"
                          }`}
                          onClick={() => setSelectedItem(item)}
                        >
                          <div className="flex items-center">
                            <ItemIcon className="h-5 w-5 text-blue-600 mr-3" />
                            <div>
                              <div className="font-medium text-gray-900">
                                {item.label}
                              </div>
                              <div className="text-sm text-gray-600">
                                {item.description}
                              </div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6 overflow-y-auto">
                {selectedItem && (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedItem.label}
                      </h3>
                      <p className="text-gray-600">
                        {selectedItem.description}
                      </p>
                    </div>

                    {/* Image Tabs */}
                    <Tabs
                      value={viewMode}
                      onValueChange={(value) =>
                        setViewMode(value as "desktop" | "mobile")
                      }
                      className="w-full"
                    >
                      <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger
                          value="desktop"
                          className="flex items-center gap-2"
                        >
                          <Monitor className="h-4 w-4" />
                          Desktop
                        </TabsTrigger>
                        <TabsTrigger
                          value="mobile"
                          className="flex items-center gap-2"
                        >
                          <Smartphone className="h-4 w-4" />
                          Mobile
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="desktop">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 text-center">
                          <div className="bg-white/50 rounded-lg p-2 border-2 border-dashed border-blue-200 aspect-video flex items-center justify-center">
                            <div className="text-center w-full h-full">
                              {/* <Monitor className="h-12 w-12 text-blue-600 mx-auto mb-4" /> */}
                              {/* <div className="text-blue-600 font-medium">
                                Vista Desktop
                              </div> */}
                              <img
                                src={selectedItem.images.desktop}
                                alt={`${selectedItem.label} - Vista desktop de ${selectedModule.label} en Nexus CRM`}
                                className="object-contain w-full h-full"
                              />
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="mobile">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-8 text-center">
                          <div className="bg-white/50 rounded-lg p-2 border-2 border-dashed border-green-200 aspect-[9/16] max-w-sm mx-auto flex items-center justify-center">
                            <div className="text-center w-full h-full">
                              <img
                                src={selectedItem.images.mobile}
                                alt={`${selectedItem.label} - Vista móvil de ${selectedModule.label} en Nexus CRM`}
                                className="object-contain w-full h-full"
                              />
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>

                    {/* Features List */}
                    <div className="mt-8">
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Características principales:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <div>
                            <div className="font-medium text-gray-900">
                              Interfaz intuitiva
                            </div>
                            <div className="text-sm text-gray-600">
                              Diseño moderno y fácil de usar
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <div>
                            <div className="font-medium text-gray-900">
                              Tiempo real
                            </div>
                            <div className="text-sm text-gray-600">
                              Actualizaciones instantáneas
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <div>
                            <div className="font-medium text-gray-900">
                              Reportes detallados
                            </div>
                            <div className="text-sm text-gray-600">
                              Análisis completo de datos
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <div>
                            <div className="font-medium text-gray-900">
                              Integración completa
                            </div>
                            <div className="text-sm text-gray-600">
                              Conecta con otros módulos
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
